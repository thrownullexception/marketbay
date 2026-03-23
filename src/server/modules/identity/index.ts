import { authService } from "./auth/service";
import { userAddressService } from "./user-addresses/service";

export const IdentityModule = {
	services: {
		auth: authService,
		userAddress: userAddressService,
	},
};
