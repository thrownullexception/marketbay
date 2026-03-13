import * as v from "valibot";
import {
	longStringSchema,
	nameSchema,
	shortStringSchema,
	zipSchema,
} from "@/server/constants/validations";

export const UserAddressIdSchema = v.pipe(
	v.string(),
	v.cuid2(),
	v.brand("UserAddressId"),
);
export const UserAddressId = v.custom<UserAddressId>((val) => {
	return v.safeParse(UserAddressIdSchema, val).success;
});
export type UserAddressId = v.InferOutput<typeof UserAddressIdSchema>;

enum SupportedCountries {
	Nigeria = "NG",
}

const UserAddressRequestSchema = v.object({
	firstName: nameSchema,
	lastName: nameSchema,
	street: longStringSchema,
	city: shortStringSchema,
	state: shortStringSchema,
	zip: zipSchema,
	country: v.enum(SupportedCountries),
});

const UserAddressResponseSchema = v.object({
	firstName: v.string(),
	lastName: v.string(),
	street: v.string(),
	city: v.string(),
	state: v.string(),
	zip: v.string(),
	isDefault: v.boolean(),
	// country: v.enum(SupportedCountries),
})

export const CreateAddressRequestSchema = UserAddressRequestSchema;
export const UpdateAddressRequestSchema = UserAddressRequestSchema;

export const ListUserAddressesResponseSchema = v.array(
	UserAddressResponseSchema
)