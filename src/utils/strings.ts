export const sluggify = (text: string) => {
	return text
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^a-z0-9-]/g, "-");
};

const ALLOWED_TAGS = ["strong", "b", "i"];

export const sanitizeHtml = (html: string): string => {
	const allowedPattern = ALLOWED_TAGS.map(
		(tag) => `<\\/?(${tag})(\\s[^>]*)?>`,
	).join("|");
	const allowedRegex = new RegExp(allowedPattern, "gi");

	const placeholders: string[] = [];
	const withPlaceholders = html.replace(allowedRegex, (match) => {
		placeholders.push(match);
		return `__PLACEHOLDER_${placeholders.length - 1}__`;
	});

	const stripped = withPlaceholders.replace(/<[^>]*>/g, "");

	return stripped.replace(/__PLACEHOLDER_(\d+)__/g, (_, index) => {
		return placeholders[Number(index)];
	});
};
