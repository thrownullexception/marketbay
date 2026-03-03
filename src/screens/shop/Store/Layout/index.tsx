import { linkOptions, Outlet } from "@tanstack/solid-router";
import { Breadcrumb } from "@/ui/breadcrumb";
import { Container } from "@/ui/layout";
import { StoreHero } from "./StoreHero";
import { StorePromo } from "./StorePromo";
import { StoreTabs } from "./StoreTabs";

export const ShopStoreLayout = () => {
	return (
		<>
			<Breadcrumb
				items={[
					{ label: "Home", link: linkOptions({ to: "/" }) },
					{ label: "Stores", link: linkOptions({ to: "/stores" }) },
					{
						label: "TechVault",
						link: linkOptions({
							to: "/store/$storeSlug",
							params: { storeSlug: "todo" },
						}),
					},
				]}
			/>
			<StoreHero />
			<StorePromo />
			<StoreTabs />
			<Container className="py-8">
				<Outlet />
			</Container>
		</>
	);
};
