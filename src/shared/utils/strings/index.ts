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

export const getInitials = (name: string) => {
	const split = name.split(" ");
	if (split.length === 1) {
		return split[0].slice(0, 2).toUpperCase();
	}
	return (
		split[0].slice(0, 1).toUpperCase() + split[1].slice(0, 1).toUpperCase()
	);
};
