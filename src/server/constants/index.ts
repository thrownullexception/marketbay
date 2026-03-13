import type { StringValue } from "ms";

export const SERVER_CONSTANTS = {
	BRAND: {
		PRIMARY: "#000000",
		SECONDARY: "#000000",
	},
	SITE: {
		NAME: "Shoppy",
		SUPPORT_EMAIL: "support@shoppy.com",
	},
	OTP: {
		EXPIRATION_TIME: "1 hour" as StringValue,
	},
	AUTH: {
		COOKIE_NAME: "sessionId",
	},
};
