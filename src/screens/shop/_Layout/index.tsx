import { Outlet } from "@tanstack/solid-router";
import { Footer, MainNav, TopBar } from "@/screens/_components/layout";

export const ShopLayout = () => {
	return (
		<>
			<TopBar variant="buyer" />
			<MainNav variant="buyer" />
			<Outlet />
			<Footer variant="full" />
		</>
	);
};
