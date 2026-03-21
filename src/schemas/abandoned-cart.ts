import * as v from "valibot";

const AbandonedCartIdSchema = v.pipe(v.number(), v.brand("AbandonedCartId"));
export const AbandonedCartId = v.custom<AbandonedCartId>((val) => {
	return v.safeParse(AbandonedCartIdSchema, val).success;
});
export type AbandonedCartId = v.InferOutput<typeof AbandonedCartIdSchema>;
