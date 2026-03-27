import { Footer, MainNav, SidebarLayout, TopBar } from "@/ui/layout";
import { NavSection } from "./NavSection";

export const AccountLayout = () => {
	return (
		<>
			<TopBar variant="buyer" />
			<MainNav variant="buyer" />
			<SidebarLayout sidebar={<NavSection />} />
			<Footer variant="full" />
		</>
	);
};
