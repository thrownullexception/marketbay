import { eq, type InferInsertModel, type InferSelectModel } from "drizzle-orm";
import type { Database } from "@/api/database";
import { NotFoundRequestError } from "@/api/shared/errors";
import type { UserId } from "@/schemas/users";
import { UserEntity } from "./entity";

export class UsersService {
	constructor(private readonly db: Database) {}

	async createUser(input: InferInsertModel<typeof UserEntity>) {
		const user = await this.db.insert(UserEntity).values(input).returning({
			id: UserEntity.id,
		});

		return user[0].id;
	}

	async getUserIdFromFieldOrFail(input: {
		field: keyof InferSelectModel<typeof UserEntity>;
		value: string;
	}) {
		const user = await this.db
			.select({
				id: UserEntity.id,
			})
			.from(UserEntity)
			.where(eq(UserEntity[input.field], input.value))
			.limit(1);

		if (user.length === 0) {
			throw new NotFoundRequestError("User not found", {
				field: input.field,
				value: input.value,
			});
		}

		return user[0].id;
	}

	async getUserIdFromFieldOrNull(input: {
		field: keyof InferSelectModel<typeof UserEntity>;
		value: string;
	}) {
		try {
			return await this.getUserIdFromFieldOrFail(input);
		} catch (_e) {
			return null;
		}
	}

	async getFieldsFromUserIdOrDie<
		T extends keyof InferSelectModel<typeof UserEntity>,
	>(input: { userId: UserId; fields: T[] }) {
		const user = await this.db
			.select(
				Object.fromEntries(
					input.fields.map((field) => [field, UserEntity[field]]),
				),
			)
			.from(UserEntity)
			.where(eq(UserEntity.id, input.userId))
			.limit(1);

		if (user.length === 0) {
			throw new NotFoundRequestError("User not found", {
				userId: input.userId,
			});
		}

		return user[0] as unknown as Pick<InferSelectModel<typeof UserEntity>, T>;
	}

	async getFieldsFromUserIdOrNull<
		T extends keyof InferSelectModel<typeof UserEntity>,
	>(input: { userId: UserId; fields: T[] }) {
		try {
			return await this.getFieldsFromUserIdOrDie(input);
		} catch (_e) {
			return null;
		}
	}

	async updateUser(input: {
		userId: UserId;
		user: Partial<InferSelectModel<typeof UserEntity>>;
	}) {
		await this.db
			.update(UserEntity)
			.set(input.user)
			.where(eq(UserEntity.id, input.userId));
	}
}
