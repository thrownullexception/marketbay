import { storeTeamMembersService } from "./store-team-members/service";
import { storesService } from "./stores/service";

export const StoresModule = {
	services: {
		storeTeamMembers: storeTeamMembersService,
		stores: storesService,
	},
};
