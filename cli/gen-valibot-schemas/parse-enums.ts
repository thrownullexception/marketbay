function parseAnyArrayConstraint(clause: string) {
	let c = clause.replace(/\\"/g, '"');
	while (c.startsWith("(") && c.endsWith(")")) c = c.slice(1, -1);
	const m = c.match(
		/ANY\s*\(\s*(?:\(+)?ARRAY\[(.*?)\](?:\))*(::[a-zA-Z0-9_ [\]]+)?\s*\)/,
	);
	if (!m) return [];
	return m[1].split(",").map((v) =>
		v
			.trim()
			.replace(/'::[a-zA-Z0-9_ ]+/g, "")
			.replace(/'/g, ""),
	);
}

function parseInConstraint(columnName: string, clause: string) {
	const m = clause.match(/\(\s*"?([a-zA-Z0-9_]+)"?\s+IN\s+\((.*?)\)\s*\)/);
	if (m && m[1] === columnName)
		return m[2].split(",").map((v) =>
			v
				.trim()
				.replace(/'::text/g, "")
				.replace(/'/g, ""),
		);
	return [];
}

function parseOrConstraint(columnName: string, clause: string) {
	const m = clause.match(
		/\(\s*((?:"?[a-zA-Z0-9_]+"?\s*=\s*'[^']+'\s*OR\s*)+"?[a-zA-Z0-9_]+"?\s*=\s*'[^']+')\s*\)/,
	);
	if (!m) return [];
	const values = [];
	for (const part of m[1].split(/\s+OR\s+/)) {
		const eq = part.match(/"?([a-zA-Z0-9_]+)"?\s*=\s*'([^']+)'/);
		if (eq && eq[1] === columnName) values.push(eq[2]);
	}
	return values;
}

function parseArrayContainsConstraint(columnName: string, clause: string) {
	const m = clause.match(/\(\s*([a-zA-Z0-9_]+)\s*<@\s*ARRAY\[(.*?)\]\s*\)/);
	if (m && m[1] === columnName)
		return m[2].split(",").map((v) =>
			v
				.trim()
				.replace(/'::text/g, "")
				.replace(/'/g, ""),
		);
	return [];
}

export function getEnumConstraints(columnName: string, constraints: string[]) {
	const values = [];
	for (const c of constraints) {
		const clause = c.replace(/\\"/g, '"');
		values.push(...parseAnyArrayConstraint(clause));
		if (values.length) continue;
		values.push(...parseInConstraint(columnName, clause));
		if (values.length) continue;
		values.push(...parseOrConstraint(columnName, clause));
		if (values.length) continue;
		values.push(...parseArrayContainsConstraint(columnName, clause));
	}
	return values;
}
