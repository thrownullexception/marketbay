import {
	Footer,
	MainNav,
	SidebarCard,
	SidebarLayout,
	TopBar,
} from "@/screens/_components/layout";
import { NavSection } from "./NavSection";

export const AccountLayout = () => {
	return (
		<>
			<TopBar variant="seller" />
			<MainNav variant="seller" />
			<SidebarLayout
				sidebar={
					<SidebarCard>
						<NavSection />
					</SidebarCard>
				}
			/>
			<Footer variant="full" />
		</>
	);
};
