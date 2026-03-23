import { index, pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/server/database/base-schema";
import { getEnumValues } from "@/server/database/enums";
import { OtpScopes, OtpVerificationIdTransformer } from "./types";

export const otpScopes = pgEnum("otp_scopes", getEnumValues(OtpScopes));

export const OtpVerificationEntity = pgTable(
	"otp_verifications",
	baseDbSchema(OtpVerificationIdTransformer.unoPrivate, {
		email: text().notNull(),
		scope: otpScopes().notNull(),
		hash: text().notNull(),
	}),
	(t) => [index().on(t.email)],
);
