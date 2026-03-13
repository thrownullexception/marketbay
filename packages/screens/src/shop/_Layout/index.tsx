import { Outlet } from "@tanstack/solid-router";
import { Footer, MainNav, TopBar } from "@/components/layout";

export const ShopLayout = () => {
	return (
		<>
			<TopBar variant="buyer" />
			<MainNav variant="buyer" isAuthenticated={false} />
			<Outlet />
			<Footer variant="full" />
		</>
	);
};
