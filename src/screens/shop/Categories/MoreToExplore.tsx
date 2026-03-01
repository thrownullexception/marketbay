import { Link } from "@tanstack/solid-router";
import { For } from "solid-js";

interface ExploreCategoryData {
	label: string;
	slug: string;
	itemCount: string;
	iconBg: string;
	iconHoverBg: string;
	iconColor: string;
	iconPaths: string[];
}

const EXPLORE_CATEGORIES: ExploreCategoryData[] = [
	{
		label: "Health & Wellness",
		slug: "health-and-wellness",
		itemCount: "2,800+",
		iconBg: "bg-pink-100",
		iconHoverBg: "group-hover:bg-pink-200",
		iconColor: "text-pink-600",
		iconPaths: [
			"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
		],
	},
	{
		label: "Education",
		slug: "education",
		itemCount: "1,600+",
		iconBg: "bg-indigo-100",
		iconHoverBg: "group-hover:bg-indigo-200",
		iconColor: "text-indigo-600",
		iconPaths: [
			"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
		],
	},
	{
		label: "Baby & Kids",
		slug: "baby-and-kids",
		itemCount: "3,400+",
		iconBg: "bg-yellow-100",
		iconHoverBg: "group-hover:bg-yellow-200",
		iconColor: "text-yellow-600",
		iconPaths: [
			"M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z",
		],
	},
	{
		label: "Photography",
		slug: "photography",
		itemCount: "1,900+",
		iconBg: "bg-teal-100",
		iconHoverBg: "group-hover:bg-teal-200",
		iconColor: "text-teal-600",
		iconPaths: [
			"M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z",
			"M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z",
		],
	},
	{
		label: "Arts & Crafts",
		slug: "arts-and-crafts",
		itemCount: "2,200+",
		iconBg: "bg-red-100",
		iconHoverBg: "group-hover:bg-red-200",
		iconColor: "text-red-600",
		iconPaths: [
			"M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
		],
	},
	{
		label: "Office & Business",
		slug: "office-and-business",
		itemCount: "1,500+",
		iconBg: "bg-sky-100",
		iconHoverBg: "group-hover:bg-sky-200",
		iconColor: "text-sky-600",
		iconPaths: [
			"M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819",
		],
	},
	{
		label: "Music",
		slug: "music",
		itemCount: "1,800+",
		iconBg: "bg-fuchsia-100",
		iconHoverBg: "group-hover:bg-fuchsia-200",
		iconColor: "text-fuchsia-600",
		iconPaths: [
			"M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z",
		],
	},
	{
		label: "Event Supplies",
		slug: "event-supplies",
		itemCount: "900+",
		iconBg: "bg-stone-100",
		iconHoverBg: "group-hover:bg-stone-200",
		iconColor: "text-stone-600",
		iconPaths: [
			"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z",
		],
	},
	{
		label: "Pet Supplies",
		slug: "pet-supplies",
		itemCount: "2,100+",
		iconBg: "bg-emerald-100",
		iconHoverBg: "group-hover:bg-emerald-200",
		iconColor: "text-emerald-600",
		iconPaths: [
			"M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0112 3.75a3.75 3.75 0 013.317 1.25m-6.634 0V5zm6.634 0V5m0 0a6.03 6.03 0 011.155-1.002 4.494 4.494 0 00-.574-1.748",
		],
	},
	{
		label: "Collectibles",
		slug: "collectibles",
		itemCount: "1,300+",
		iconBg: "bg-amber-100",
		iconHoverBg: "group-hover:bg-amber-200",
		iconColor: "text-amber-600",
		iconPaths: [
			"M11.42 15.17l-5.648 3.01a.75.75 0 01-1.088-.791l1.078-6.289L1.81 7.287a.75.75 0 01.416-1.279l6.31-.917L11.35.734a.75.75 0 011.302 0l2.812 5.357 6.31.917a.75.75 0 01.416 1.28l-4.563 4.453 1.078 6.29a.75.75 0 01-1.088.79L12 15.17l-5.648 3.01a.75.75 0 01-1.088-.79l1.078-6.29L1.81 7.29a.75.75 0 01.416-1.28l6.31-.916L11.35.734a.75.75 0 011.302 0l2.812 5.358z",
		],
	},
	{
		label: "Handmade",
		slug: "handmade",
		itemCount: "4,700+",
		iconBg: "bg-blue-100",
		iconHoverBg: "group-hover:bg-blue-200",
		iconColor: "text-blue-600",
		iconPaths: [
			"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
		],
	},
	{
		label: "Gaming",
		slug: "gaming",
		itemCount: "3,600+",
		iconBg: "bg-violet-100",
		iconHoverBg: "group-hover:bg-violet-200",
		iconColor: "text-violet-600",
		iconPaths: [
			"M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.491 48.491 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z",
		],
	},
];

const ExploreCategoryCard = (props: { category: ExploreCategoryData }) => (
	<Link
		to="/category/$categorySlug"
		params={{ categorySlug: props.category.slug }}
		class="cat-card group flex flex-col items-center p-5 rounded-2xl border border-gray-100 bg-white transition-all duration-300 text-center"
	>
		<div
			class={`cat-icon w-14 h-14 rounded-2xl ${props.category.iconBg} ${props.category.iconHoverBg} flex items-center justify-center mb-3 transition-all duration-300`}
		>
			<svg
				class={`w-7 h-7 ${props.category.iconColor}`}
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="1.5"
			>
				<title>{props.category.label}</title>
				<For each={props.category.iconPaths}>
					{(d) => <path stroke-linecap="round" stroke-linejoin="round" d={d} />}
				</For>
			</svg>
		</div>
		<h3 class="text-sm font-semibold text-gray-900 group-hover:text-brand-600 transition">
			{props.category.label}
		</h3>
		<p class="text-[11px] text-gray-400 mt-0.5">
			{props.category.itemCount} items
		</p>
	</Link>
);

export const MoreToExplore = () => {
	return (
		<section class="py-10 bg-white">
			<div class="max-w-7xl mx-auto px-4">
				<h2 class="text-lg font-bold text-gray-900 mb-6">More to Explore</h2>
				<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
					<For each={EXPLORE_CATEGORIES}>
						{(category) => <ExploreCategoryCard category={category} />}
					</For>
				</div>
			</div>
		</section>
	);
};
