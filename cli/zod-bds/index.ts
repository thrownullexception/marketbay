// #!/usr/bin/env node
/** biome-ignore-all lint/style/useNodejsImportProtocol: bun */

import { config } from "dotenv";

config({ path: ["./.env.local", "./.env"] });

import { readdirSync, writeFileSync } from "fs";
import { join } from "path";
import { fetchSchema } from "./get-schema";
import { generateTableFile } from "./render";

const output = "./src/server/app";

async function main() {
	const tables = await fetchSchema();

	const entityDirMap = new Map();
	const modules = readdirSync(output, { withFileTypes: true }).filter((d) =>
		d.isDirectory(),
	);

	for (const mod of modules) {
		const modPath = join(output, mod.name);
		const entities = readdirSync(modPath, { withFileTypes: true }).filter((d) =>
			d.isDirectory(),
		);
		for (const entity of entities) {
			entityDirMap.set(entity.name, join(modPath, entity.name));
		}
	}

	for (const table of tables) {
		const content = generateTableFile(table);

		const kebabName = table.name.replace(/_/g, "-");
		const outDir = entityDirMap.get(kebabName);
		if (!outDir) {
			throw new Error(
				`No domain folder found for table "${table.name}" (expected kebab-case folder "${kebabName}" under ${output}/<module>/)`,
			);
		}
		const outPath = join(outDir, "schemas.ts");
		writeFileSync(outPath, content, "utf8");

		console.log(`Wrote ${outPath}`);
	}

	if (tables.length === 0) {
		console.log("No tables found");
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});

//     if(column.name === 'updatedAt') {
//       column.type = 'string';
