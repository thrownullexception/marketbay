import { Link } from "@tanstack/solid-router";
import {
	BellIcon,
	ChevronDownIcon,
	MessagesSquare,
	ShoppingCartIcon,
	User,
} from "lucide-solid";
import { LogoHeader } from "./logo";
import { SearchInput } from "./search-input";

type MainNavVariant = "seller" | "buyer";

export const MainNav = (props: {
	variant: MainNavVariant;
	isAuthenticated: boolean;
}) => {
	return (
		<nav class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
			<div class="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
				<LogoHeader />

				<div
					class={
						props.variant === "seller"
							? "flex-1 max-w-xl mx-auto hidden sm:block"
							: "flex-1 max-w-2xl mx-auto"
					}
				>
					<SearchInput
						placeholder={
							props.variant === "seller"
								? "Search orders, products, customers..."
								: "Search products, stores, brands..."
						}
					/>
				</div>

				<div class="flex items-center gap-3">
					{props.variant === "seller" ? (
						<>
							{/*<Link
								to="/notifications"
								class="relative p-2 rounded-full hover:bg-gray-100 transition"
								aria-label="Notifications"
							>
								<BellIcon class="w-5 h-5 text-gray-600" />
								<span class="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
									4
								</span>
							</Link> */}
							<Link
								to="/chat"
								class="relative p-2 rounded-full hover:bg-gray-100 transition"
								aria-label="Messages"
							>
								<MessagesSquare class="w-5 h-5 text-gray-600" />
								<span class="absolute -top-0.5 -right-0.5 w-5 h-5 bg-brand-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
									6
								</span>
							</Link>
							<div class="hidden sm:flex items-center gap-2 pl-2 border-l border-gray-200 ml-1">
								<div class="w-8 h-8 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xs font-bold">
									TV
								</div>
								<div class="text-left">
									<p class="text-sm font-semibold text-gray-900 leading-tight">
										TechVault
									</p>
									<p class="text-[10px] text-gray-400 leading-tight">
										Seller Account
									</p>
								</div>
								<ChevronDownIcon class="w-4 h-4 text-gray-400" />
							</div>
						</>
					) : (
						<>
							<Link
								class="relative p-2 rounded-full hover:bg-gray-100 transition"
								aria-label="Messages"
								to="/chat"
							>
								<MessagesSquare class="w-5 h-5 text-gray-600" />
								<span class="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
									2
								</span>
							</Link>
							<Link
								to="/cart"
								class="relative p-2 rounded-full hover:bg-gray-100 transition"
							>
								<ShoppingCartIcon class="w-5 h-5 text-gray-600" />
								<span class="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-accent-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
									3
								</span>
							</Link>
							{props.isAuthenticated ? (
								<div class="hidden sm:flex items-center gap-2 pl-2 border-l border-gray-200 ml-1">
									<div class="w-8 h-8 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xs font-bold">
										AW
									</div>
									<div class="text-left">
										<p class="text-sm font-semibold text-gray-900 leading-tight">
											Alex Jones
										</p>
									</div>
									<ChevronDownIcon class="w-4 h-4 text-gray-400" />
								</div>
							) : (
								<Link
									to="/login"
									class="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-brand-600 transition"
								>
									<User class="w-5 h-5" />
									Sign In
								</Link>
							)}
						</>
					)}
				</div>
			</div>
		</nav>
	);
};
