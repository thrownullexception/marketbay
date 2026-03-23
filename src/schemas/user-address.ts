import * as v from "valibot";
import {
  longStringSchema,
  nameSchema,
  shortStringSchema,
  zipSchema,
} from "@/schemas/base";
import {
  type PrivateUserAddressId,
  type PublicUserAddressId,
  UserAddressIdTransformer,
} from "@/server/modules/identity/user-addresses/types";

export const UserAddressIdSchema = v.pipe(v.number(), v.brand("UserAddressId"));
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
});

export class UserAddressResponseTransformer {
  id: PublicUserAddressId;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  isDefault: boolean;

  constructor(address: {
    id: PrivateUserAddressId;
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    isDefault: boolean;
  }) {
    this.id = UserAddressIdTransformer.toPublic(address.id);
    this.firstName = address.firstName;
    this.lastName = address.lastName;
    this.street = address.street;
    this.city = address.city;
    this.state = address.state;
    this.zip = address.zip;
    this.isDefault = address.isDefault;
  }
}

export const CreateAddressRequestSchema = UserAddressRequestSchema;
export const UpdateAddressRequestSchema = UserAddressRequestSchema;

export const ListUserAddressesResponseSchema = v.array(
  UserAddressResponseSchema,
);
