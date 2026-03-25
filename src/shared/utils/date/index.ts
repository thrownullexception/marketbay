import { format, formatDistanceToNow, isToday, isYesterday } from "date-fns";

export const beautifyDate = (input$1: Date) => {
	const input = typeof input$1 === "string" ? new Date(input$1) : input$1;
	const timeFormat = "h:mm aa";
	const currentYear = new Date().getFullYear();
	const inputYear = input.getFullYear();

	if (isToday(input)) {
		return `Today, ${format(input, timeFormat)}`;
	}

	if (isYesterday(input)) {
		return `Yesterday, ${format(input, timeFormat)}`;
	}

	if (inputYear === currentYear) {
		return format(input, "MMM d, h:mm aa");
	}

	return format(input, "MMM d, yyyy, h:mm aa");
};

export const dateFromNow = (input: Date | string) => {
	return formatDistanceToNow(input, { addSuffix: true });
};
