import * as v from "valibot";

const StoreInvitationIdSchema = v.pipe(
	v.number(),
	v.brand("StoreInvitationId"),
);
export const StoreInvitationId = v.custom<StoreInvitationId>((val) => {
	return v.safeParse(StoreInvitationIdSchema, val).success;
});
export type StoreInvitationId = v.InferOutput<typeof StoreInvitationIdSchema>;

export enum InvitationStatus {
	Pending = "pending",
	Accepted = "accepted",
	Declined = "declined",
	Revoked = "revoked",
	Expired = "expired",
}
