import { toCamelCase } from "drizzle-orm/casing";
import { SCHEMA_QUERY, ZOD_TYPE_MAP } from "./constant";
import { getEnumConstraints } from "./parse-enums";
import { Client } from "pg";

function isSerialType(dataType: string, defaultValue: string) {
    return (
      defaultValue?.toLowerCase().startsWith("nextval(") ||
      ["serial", "serial4", "serial8", "bigserial"].includes(
        dataType?.toLowerCase(),
      )
    );
  }

  function getZodType(dataType: string) {
    let t = dataType
      .toLowerCase()
      .replace(/^_/, "")
      .replace(/\(\d+\)$/, "")
      .replace(/\d+$/, "");
    return ZOD_TYPE_MAP[t] ?? "any";
  }


export interface Column {
    name: string;
    propertyName: string;
    tableName: string;
    dataType: string;
    isNullable: boolean;
    maxLen: number | undefined;
    defaultValue: string | undefined;
    isEnum: boolean;
    enumValues: string[] | null;
    isSerial: boolean;
    isWritable: boolean;
    zodType: string;
    isReadOptional: boolean;
    isWriteOptional: boolean;
    minLen: number | undefined;
    //
    renderedReadType?: string;
    renderedWriteType?: string;
    isArray?: boolean;
    enumConstantName?: string;
}

export interface Table {
    name: string;
    schemaName: string;
    columns: Column[];
}

const schemaName = "public";

export async function fetchSchema(): Promise<Table[]> {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    await client.connect();

    try {
        
  

    const res = await client.query(SCHEMA_QUERY, [schemaName]);
    const tables = new Map<string, Table>();
  
    for (const row of res.rows) {
      let enumValues = row.enumValues?.length ? row.enumValues : null;
      if (!enumValues && row.checkConstraints?.length) {
        enumValues = getEnumConstraints(
          row.name,
          row.checkConstraints.map((c: { checkClause: string }) => c.checkClause),
        );
      }
      if (Array.isArray(enumValues) && enumValues.length === 0) enumValues = null;
  
      const isSerial = isSerialType(row.dataType, row.defaultValue);
      const col = {
        name: row.name,
        propertyName: toCamelCase(row.name),
        tableName: row.tableName,
        dataType: row.dataType,
        isNullable: row.isNullable,
        maxLen: row.maxLen ?? undefined,
        defaultValue: row.defaultValue ?? undefined,
        isEnum: !!enumValues?.length,
        enumValues: enumValues ?? undefined,
        isSerial,
        isWritable: !isSerial && row.tableType === "table",
        zodType: getZodType(row.dataType),
        isReadOptional: row.isNullable,
        isWriteOptional: row.isNullable || !!row.defaultValue,
        minLen: undefined,
      };
  
      if (!tables.has(row.tableName)) {
        tables.set(row.tableName, {
          name: row.tableName,
          schemaName,
          columns: [],
        });
      }
      tables.get(row.tableName)?.columns.push(col);
    }
  
    return Array.from(tables.values());
} finally {
    await client.end();
}
}
  