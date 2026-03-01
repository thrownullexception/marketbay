import { Link } from "@tanstack/solid-router";

export const ProductInfo = () => {
	return (
		<>
			<Link
				to="/store/$storeSlug"
				params={{ storeSlug: "techvault" }}
				class="inline-flex items-center gap-2 mb-3 group"
			>
				<div class="w-7 h-7 rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">
					TV
				</div>
				<span class="text-sm font-medium text-brand-600 group-hover:underline">
					TechVault
				</span>
				<span class="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-semibold rounded-full border border-blue-100">
					<svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
						<title>Verified</title>
						<path
							fill-rule="evenodd"
							d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clip-rule="evenodd"
						/>
					</svg>
					Verified
				</span>
			</Link>

			<h1 class="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
				Pro Studio Wireless Headphones — Active Noise Cancelling
			</h1>

			<div class="flex items-center gap-3 mt-3">
				<div class="flex items-center gap-1">
					<div class="flex text-accent-500">
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<title>Star</title>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<title>Star</title>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<title>Star</title>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<title>Star</title>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<title>Star</title>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
					</div>
					<span class="text-sm font-semibold text-gray-700">4.9</span>
				</div>
				<a href="#reviews" class="text-sm text-brand-600 hover:underline">
					243 reviews
				</a>
				<span class="text-gray-300">|</span>
				<span class="text-sm text-gray-500">1.2k sold</span>
			</div>

			<div class="mt-5 flex items-baseline gap-3">
				<span class="text-3xl font-extrabold text-gray-900">$59.99</span>
				<span class="text-lg text-gray-400 line-through">$99.99</span>
				<span class="px-2.5 py-1 bg-red-50 text-red-600 text-sm font-bold rounded-lg">
					-40%
				</span>
			</div>
			<p class="text-xs text-emerald-600 font-medium mt-1.5 flex items-center gap-1">
				<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
					<title>In stock</title>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
				In stock — ships within 24 hours
			</p>
		</>
	);
};
