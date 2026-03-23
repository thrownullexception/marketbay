import { HashIdTransformer } from "@/server/services/hashid";

export const UserAddressIdTransformer = new HashIdTransformer("UserAddressId");

export type UserAddressId = ReturnType<typeof UserAddressIdTransformer.toDbId>;
export type UserAddressIdHash = ReturnType<typeof UserAddressIdTransformer.toPublicHash>;

export class UserAddressListItemTransformer {
    id: UserAddressIdHash;
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    isDefault: boolean;
  
    constructor(address: {
      id: UserAddressId;
      firstName: string;
      lastName: string;
      street: string;
      city: string;
      state: string;
      zip: string;
      isDefault: boolean;
    }) {
      this.id = UserAddressIdTransformer.toPublicHash(address.id);
      this.firstName = address.firstName;
      this.lastName = address.lastName;
      this.street = address.street;
      this.city = address.city;
      this.state = address.state;
      this.zip = address.zip;
      this.isDefault = address.isDefault;
    }
  }