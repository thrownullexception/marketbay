import type { UserId, UserIdHash } from "../users/types";
import { UserIdTransformer } from "../users/types";

export class AuthenticatedUserTransformer {
	id: UserIdHash;
	firstName: string;
	lastName: string;

	constructor(user: {
        id: UserId;
        firstName: string;
        lastName: string;
    }) {
		this.id = UserIdTransformer.toPublicHash(user.id);
		this.firstName = user.firstName;
		this.lastName = user.lastName;
	}
}