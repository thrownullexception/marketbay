import { Link, Outlet, useRouter } from "@tanstack/solid-router";
import { X } from "lucide-solid";
import type { JSX } from "solid-js";
import { Button } from "@/ui/button";

const MinimalWrapper = ({ children }: { children: JSX.Element }) => {
	const router = useRouter();
	return (
		<div class="bg-gray-50 text-gray-800 font-sans antialiased min-h-screen flex flex-col">
			<nav class="bg-white border-b border-gray-100 shadow-sm">
				<div class="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
					<Link to="/" class="flex items-center gap-2">
						<div class="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center">
							<svg
								class="w-5 h-5 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<title>Logo</title>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						</div>
						<span class="text-xl font-extrabold text-brand-950 tracking-tight">
							Market<span class="text-brand-600">Bay</span>
						</span>
					</Link>
					<Button
						label="Exit"
						variant="text"
						Icon={X}
						onClick={() => router.history.back()}
					/>
				</div>
			</nav>

			{children}

			<footer class="border-t border-gray-100 bg-white py-6">
				<div class="max-w-3xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
					<p class="text-xs text-gray-400">
						&copy; 2026 MarketBay. All rights reserved.
					</p>
					<div class="flex items-center gap-4 text-xs text-gray-400">
						<Link to="/privacy-policy" class="hover:text-gray-600 transition">
							Privacy
						</Link>
						<Link to="/terms-of-service" class="hover:text-gray-600 transition">
							Terms
						</Link>
						<Link to="/help" class="hover:text-gray-600 transition">
							Help
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
};

export const AuthLayout = () => {
	return (
		<MinimalWrapper>
			<main class="flex-1 flex items-center justify-center py-12 px-4">
				<div class="w-full max-w-lg">
					<Outlet />
				</div>
			</main>
		</MinimalWrapper>
	);
};

export const MinimalLayout = () => {
	return (
		<MinimalWrapper>
			<Outlet />
		</MinimalWrapper>
	);
};
