import Elysia from "elysia";
import { storesGuestMerchantController, storesMerchantController  } from "@/server/modules/stores/stores/merchant.controller";

export const merchantServerApp = new Elysia({
	prefix: "/api/merchant",
})
	.use(storesMerchantController)
	.use(storesGuestMerchantController)