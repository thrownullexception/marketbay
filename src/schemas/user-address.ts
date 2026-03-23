import * as v from "valibot";
import {
  longStringSchema,
  nameSchema,
  shortStringSchema,
  zipSchema,
} from "@/schemas/base";

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

export const CreateAddressRequestSchema = UserAddressRequestSchema;
export const UpdateAddressRequestSchema = UserAddressRequestSchema;
