import { Outlet } from "@tanstack/solid-router";
import type { JSX } from "solid-js";
import { Grid5 } from "@/ui/grid";
import { Container } from "@/ui/layout";

type SidebarLayoutProps = {
	sidebar: JSX.Element;
};

export const SidebarLayout = (props: SidebarLayoutProps) => {
	return (
		<Container class="py-8 lg:py-10">
			<div class="grid lg:grid-cols-5 gap-8">
				<div class="lg:col-span-1">
					<div class="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-24">
						{props.sidebar}
					</div>
				</div>
				<div class="lg:col-span-4 space-y-6">
					<Outlet />
				</div>
			</div>
		</Container>
	);
};
