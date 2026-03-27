import { authService } from "./auth/service";
import { userAddressService } from "./user-addresses/service";
import { usersService } from "./users/service";

export const IdentityModule = {
	services: {
		auth: authService,
		userAddress: userAddressService,
		users: usersService,
	},
};
