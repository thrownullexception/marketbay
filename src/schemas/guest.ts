import * as v from "valibot";

export const GuestIdSchema = v.pipe(v.number(), v.brand("GuestId"));
export const GuestId = v.custom<GuestId>((val) => {
    return v.safeParse(GuestIdSchema, val).success;
});
export type GuestId = v.InferOutput<typeof GuestIdSchema>;