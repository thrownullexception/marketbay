import { db } from "@/api/database";
import { serverEnv } from "@/api/env";
import { CacheService } from "@/api/services/cache";
import { MailService } from "@/api/services/mail";
import { RandomService } from "@/api/services/random";
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
