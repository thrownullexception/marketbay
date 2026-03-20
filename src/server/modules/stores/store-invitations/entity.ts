import {
    pgEnum,
	pgTable,
	text,
	timestamp,
	unique,
} from "drizzle-orm/pg-core";
import { InvitationStatus, StoreInvitationId } from "@/schemas/store-invitation";
import { baseDbSchema } from "@/server/database/base-schema";
import { getEnumValues } from "@/server/database/enums";
import { referencesStoreRoleEntity } from "../store-roles/entity";
import { referencesStoreEntity } from "../stores/entity";

export const invitationStatus = pgEnum(
	"invitation_status",
	getEnumValues(InvitationStatus),
);

export const StoreInvitationEntity = pgTable(
	"store_invitations",
	baseDbSchema(StoreInvitationId, {
		storeId: referencesStoreEntity("cascade").notNull(),
		roleId: referencesStoreRoleEntity("restrict").notNull(),
		email: text().notNull(),

        personalMessage: text(),

        status: invitationStatus().notNull().default(InvitationStatus.Pending),

        sentAt: timestamp().defaultNow(), 
        expiresAt: timestamp(), // + 7 days
        acceptedAt: timestamp(),
	}),
	(t) => [unique().on(t.storeId, t.email)],
);

