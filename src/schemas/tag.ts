import * as v from "valibot";

const TagIdSchema = v.pipe(v.number(), v.brand("TagId"));
export const TagId = v.custom<TagId>((val) => {
	return v.safeParse(TagIdSchema, val).success;
});
export type TagId = v.InferOutput<typeof TagIdSchema>;
