import * as v from "valibot";

const StoreRoleIdSchema = v.pipe(v.number(), v.brand("StoreRoleId"));
export const StoreRoleId = v.custom<StoreRoleId>((val) => {
	return v.safeParse(StoreRoleIdSchema, val).success;
});
export type StoreRoleId = v.InferOutput<typeof StoreRoleIdSchema>;
