import { db } from "@/server/database";
import { StoreTeamMembersService } from "./store-team-members/service";
import { StoresService } from "./stores/service";

const storeTeamMembersService = new StoreTeamMembersService(db);

const storesService = new StoresService(db, storeTeamMembersService);

export const StoresModule = {
	services: {
		stores: storesService,
	},
};
