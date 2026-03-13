import { index, pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { baseDbSchema } from "@/api/database/base-schema";
import { getEnumValues } from "@/api/database/enums";
import { OtpVerificationId } from "./schemas";
import { OtpScopes } from "./types";

export const otpScopes = pgEnum("otp_scopes", getEnumValues(OtpScopes));

export const OtpVerificationEntity = pgTable(
	"otp_verifications",
	baseDbSchema(OtpVerificationId, {
		email: text().notNull(),
		scope: otpScopes().notNull(),
		hash: text().notNull(),
	}),
	(t) => [index().on(t.email)],
);
