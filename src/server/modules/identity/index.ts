import { db } from "@/server/database";
import { serverEnv } from "@/server/env";
import { CacheService } from "@/server/services/cache";
import { MailService } from "@/server/services/mail";
import { RandomService } from "@/server/services/random";
import { AuthService } from "./auth/service";
import { UserAddressService } from "./user-addresses/service";
import { UsersService } from "./users/service";

const randomService = new RandomService();

const mailService = new MailService(serverEnv);

const usersService = new UsersService(db);

const cacheService = new CacheService(serverEnv);

const authService = new AuthService(
	db,
	cacheService,
	usersService,
	mailService,
	randomService,
);

const userAddressService = new UserAddressService(db);

export const IdentityModule = {
	services: {
		auth: authService,
		userAddress: userAddressService,
	},
};
