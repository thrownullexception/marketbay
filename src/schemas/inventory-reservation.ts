import * as v from "valibot";

const InventoryReservationIdSchema = v.pipe(
	v.number(),
	v.brand("InventoryReservationId"),
);
export const InventoryReservationId = v.custom<InventoryReservationId>(
	(val) => {
		return v.safeParse(InventoryReservationIdSchema, val).success;
	},
);
export type InventoryReservationId = v.InferOutput<
	typeof InventoryReservationIdSchema
>;
