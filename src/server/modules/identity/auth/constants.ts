import type { StringValue } from "ms";
import ms from "ms";
import { serverEnv } from "@/server/env";

export const OTP_EXPIRATION_TIME = "1 hour" as StringValue;

export const AUTH_COOKIE_NAME = "uid";

export const UN_AUTHENTICATED_USER_COOKIE_NAME = "unuid";

export const STORE_COOKIE_NAME = "sid";

export const COOKIE_OPTIONS = ({maxAge, value}: {maxAge?: StringValue, value: string}) => ({
	value,
	httpOnly: serverEnv.ENV === "prod",
	secure: true,
	sameSite: "lax",
	// domain: ".marketbay.ng",
	path: "/",
    maxAge: maxAge ? ms(maxAge) / 1000 : undefined,
} as const);