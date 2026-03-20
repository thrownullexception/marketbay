import * as v from "valibot";

export const InventoryIdSchema = v.pipe(v.number(), v.brand("InventoryId"));
export const InventoryId = v.custom<InventoryId>((val) => {
    return v.safeParse(InventoryIdSchema, val).success;
});
export type InventoryId = v.InferOutput<typeof InventoryIdSchema>;