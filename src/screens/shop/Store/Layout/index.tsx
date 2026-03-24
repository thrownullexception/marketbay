import { createQuery } from "@tanstack/solid-query";
import { getRouteApi, linkOptions, Outlet } from "@tanstack/solid-router";
import { Breadcrumb } from "@/ui/breadcrumb";
import { StoreHero, storeQuery } from "./StoreHero";
import { StorePromo } from "./StorePromo";
import { StoreTabs } from "./StoreTabs";

export const ShopStoreLayout = () => {
	const routeApi = getRouteApi("/(app)/store/$storeSlug");
	const params = routeApi.useParams();

	const storeResult = createQuery(() => storeQuery(params().storeSlug));

	return (
		<>
			<Breadcrumb
				items={[
					{ label: "Home", link: linkOptions({ to: "/" }) },
					{ label: "Stores", link: linkOptions({ to: "/stores" }) },
					{
						label: storeResult.data?.name || "",
						link: linkOptions({
							to: "/store/$storeSlug",
							params: { storeSlug: params().storeSlug },
						}),
					},
				]}
			/>
			<StoreHero />
			<StorePromo />
			<StoreTabs />
			<Outlet />
		</>
	);
};
