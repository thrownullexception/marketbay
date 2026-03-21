import * as v from "valibot";

const StoreRolePermissionIdSchema = v.pipe(
	v.number(),
	v.brand("StoreRolePermissionId"),
);
export const StoreRolePermissionId = v.custom<StoreRolePermissionId>((val) => {
	return v.safeParse(StoreRolePermissionIdSchema, val).success;
});
export type StoreRolePermissionId = v.InferOutput<
	typeof StoreRolePermissionIdSchema
>;
