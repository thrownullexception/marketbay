import { eq, sql } from "drizzle-orm";
import type * as v from "valibot";
import type { UserId } from "@/schemas/user";
import type { CreateAddressRequestSchema, UserAddressId } from "@/schemas/user-address";
import type { Database } from "@/server/database";
import { UserAddressEntity } from "./entity";

export class UserAddressService {
	constructor(private readonly db: Database) {}

	async getUserAddresses(userId: UserId) {
		console.log("getUserAddresses", userId);
		return await this.db
			.select({
				firstName: UserAddressEntity.firstName,
				lastName: UserAddressEntity.lastName,
				street: UserAddressEntity.street,
				city: UserAddressEntity.city,
				state: UserAddressEntity.state,
				zip: UserAddressEntity.zip,
				country: UserAddressEntity.country,
				isDefault: UserAddressEntity.isDefault,
			})
			.from(UserAddressEntity)
			.where(eq(UserAddressEntity.userId, userId));
	}

	async getAddress(addressId: UserAddressId) {
		return (
			await this.db
				.select({
					firstName: UserAddressEntity.firstName,
					lastName: UserAddressEntity.lastName,
					street: UserAddressEntity.street,
					city: UserAddressEntity.city,
					state: UserAddressEntity.state,
					zip: UserAddressEntity.zip,
					country: UserAddressEntity.country,
					isDefault: UserAddressEntity.isDefault,
				})
				.from(UserAddressEntity)
				.where(eq(UserAddressEntity.id, addressId))
				.limit(1)
		)[0];
	}

	async createAddress(
		userId: UserId,
		input: v.InferInput<typeof CreateAddressRequestSchema>,
	) {
		const addressCount = (
			await this.db
				.select({ count: sql<number>`count(*)::int` })
				.from(UserAddressEntity)
				.where(eq(UserAddressEntity.userId, userId))
		)[0].count;

		await this.db
			.insert(UserAddressEntity)
			.values({ ...input, isDefault: addressCount === 0, userId })
			.returning({
				id: UserAddressEntity.id,
			});
	}

	async updateAddress(
		addressId: UserAddressId,
		input: v.InferInput<typeof CreateAddressRequestSchema>,
	) {
		await this.db
			.update(UserAddressEntity)
			.set(input)
			.where(eq(UserAddressEntity.id, addressId));
	}

	async deleteAddress(addressId: UserAddressId) {
		await this.db
			.delete(UserAddressEntity)
			.where(eq(UserAddressEntity.id, addressId));
	}
}
