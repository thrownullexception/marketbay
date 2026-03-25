import Elysia from "elysia";
import {
	storesGuestMerchantController,
	storesMerchantController,
} from "@/server/modules/stores/stores/merchant.controller";
import { authMerchantController } from "../modules/identity/auth/merchant.controller";

export const merchantServerApp = new Elysia({
	prefix: "/api/merchant",
})
	.use(authMerchantController)
	.use(storesMerchantController)
	.use(storesGuestMerchantController);
