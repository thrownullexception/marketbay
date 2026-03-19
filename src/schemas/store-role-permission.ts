import * as v from "valibot";

const StoreRolePermissionIdSchema = v.pipe(v.string(), v.cuid2(), v.brand("StoreRolePermissionId"));
export const StoreRolePermissionId = v.custom<StoreRolePermissionId>((val) => {
	return v.safeParse(StoreRolePermissionIdSchema, val).success;
});
export type StoreRolePermissionId = v.InferOutput<typeof StoreRolePermissionIdSchema>;
