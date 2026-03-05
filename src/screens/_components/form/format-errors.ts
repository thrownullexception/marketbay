export const formatErrors = (errors: {
	type: "email" | "min_length" | "max_length" | "required";
	message: string;
	requirement: number;
	code: string;
	path: string[];
}): { message: string } => {
	if (errors.type === "email") {
		return {
			message: "Invalid email",
		};
	}
	if (errors.type === "min_length") {
		if (errors.requirement === 1) {
			return {
				message: "Required",
			};
		}
		return {
			message: `Minimum of ${errors.requirement} characters`,
		};
	}
	if (errors.type === "max_length") {
		return {
			message: `Maximum of ${errors.requirement} characters`,
		};
	}
	if (errors.type === "required") {
		return {
			message: "Required",
		};
	}
	return {
		message: errors.message,
	};
};
