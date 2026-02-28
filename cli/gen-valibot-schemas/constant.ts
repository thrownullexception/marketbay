export const TYPE_MAP: Record<string, string> = {
    text: "string",
    tinytext: "string",
    mediumtext: "string",
    longtext: "string",
    varchar: "string",
    char: "string",
    nchar: "string",
    nvarchar: "string",
    "character varying": "string",
    character: "string",
    bpchar: "string",
    bytea: "string",
    inet: "string",
    cidr: "string",
    macaddr: "string",
    point: "string",
    polygon: "string",
    circle: "string",
    objectid: "string",
    name: "string",
    time: "string",
    timetz: "string",
    string: "string",
    int: "int",
    integer: "int",
    long: "int",
    smallint: "int",
    bigint: "int",
    mediumint: "int",
    tinyint: "int",
    year: "int",
    serial: "int",
    bigserial: "int",
    real: "number",
    float: "number",
    decimal: "number",
    double: "number",
    "double precision": "number",
    numeric: "number",
    number: "number",
    money: "number",
    bool: "boolean",
    boolean: "boolean",
    timestamptz: "date",
    timestamp: "date",
    date: "date",
    uuid: "uuid",
    jsonb: "json",
    json: "json",
    object: "object",
    unknown: "unknown",
  };
  

  // --- PostgreSQL schema fetch ---
export const SCHEMA_QUERY = `
SELECT
  c.relname AS "tableName",
  a.attname AS "name",
  pg_get_expr(d.adbin, d.adrelid) AS "defaultValue",
  t.typname AS "dataType",
  NOT a.attnotnull AS "isNullable",
  CASE WHEN a.atttypmod > 0 THEN a.atttypmod - 4 ELSE NULL END AS "maxLen",
  checks."checkConstraints",
  CASE WHEN t.typtype = 'e' THEN (
    SELECT array_agg(ev.enumlabel::text ORDER BY ev.enumsortorder)::text[]
    FROM pg_enum ev WHERE ev.enumtypid = t.oid
  ) ELSE NULL END AS "enumValues",
  col_description(c.oid, a.attnum) AS "description",
  CASE
    WHEN c.relkind = 'r' THEN 'table'
    WHEN c.relkind = 'v' THEN 'view'
    WHEN c.relkind = 'm' THEN 'materialized_view'
    WHEN c.relkind = 'f' THEN 'foreign_table'
    ELSE 'unknown'
  END AS "tableType"
FROM pg_class c
JOIN pg_namespace n ON n.oid = c.relnamespace
JOIN pg_attribute a ON a.attrelid = c.oid
JOIN pg_type t ON t.oid = a.atttypid
LEFT JOIN pg_attrdef d ON d.adrelid = c.oid AND d.adnum = a.attnum
LEFT JOIN LATERAL (
  SELECT json_agg(json_build_object('checkClause', pg_get_constraintdef(pgc.oid))) AS "checkConstraints"
  FROM pg_constraint pgc
  WHERE pgc.conrelid = c.oid AND pgc.contype = 'c' AND pgc.conkey @> ARRAY[a.attnum]
) AS checks ON TRUE
WHERE n.nspname = $1
  AND c.relkind IN ('r', 'v', 'm', 'f')
  AND a.attnum > 0
  AND NOT a.attisdropped
ORDER BY c.relname, a.attnum
`;
