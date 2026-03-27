import {
	Link,
	type LinkOptions,
	linkOptions,
} from "@tanstack/solid-router";
import { LogOutIcon, type LucideIcon } from "lucide-solid";
import { For } from "solid-js";
import { getShopTreatyQueryKey } from "@/shared/treaty";
import { useTreatyMutation } from "@/shared/treaty/mutation";
import { getShopTreaty } from "@/shared/treaty/shop.treaty";

export type NavLinkItemProps = {
	label: string;
	Icon: LucideIcon;
	link: LinkOptions;
	exact?: boolean;
	badge?: { value: string };
};

const NavLinkItem = (props: NavLinkItemProps) => {
	return (
		<Link
			to={props.link.to}
			params={props.link.params}
			activeOptions={{ exact: props.exact ?? false }}
			class="flex items-center gap-3 px-5 py-2.5 text-sm font-medium transition hover:bg-gray-50"
			activeProps={{
				class: "text-brand-600 border-r-2 bg-brand-50 border-brand-600",
			}}
			inactiveProps={{ class: "text-gray-600" }}
		>
			<props.Icon class="w-4 h-4 shrink-0" />
			{props.label}
			{props.badge && (
				<span class="ml-auto px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-gray-100 text-gray-500">
					{props.badge.value}
				</span>
			)}
		</Link>
	);
};

export const NavItems = (props: { items: NavLinkItemProps[][] }) => {
	const signOutMutation = useTreatyMutation(() => ({
		mutationFn: getShopTreaty().auth.signout.post,
		redirect: linkOptions({
			to: "/",
		}),
		endpoints: [
			getShopTreatyQueryKey((t) => t.auth.me.get()),
		],
	}));

	return (
		<nav class="py-2">
			<For each={props.items}>
				{(section) => (
					<>
						<For each={section}>{(item) => <NavLinkItem {...item} />}</For>
						<hr class="my-2 border-gray-100" />
					</>
				)}
			</For>
			<button
				type="button"
				onClick={() => signOutMutation.mutate({})}
				class="flex w-full  cursor-pointer items-center gap-3 px-5 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50"
			>
				<LogOutIcon class="w-4 h-4 shrink-0" />
				Sign Out
			</button>
		</nav>
	);
};
