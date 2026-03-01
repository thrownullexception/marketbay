export const ProductGallery = () => {
	return (
		<div class="space-y-4">
			<div class="aspect-square rounded-2xl bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center overflow-hidden border border-gray-100">
				<svg
					class="w-40 h-40 text-brand-200"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="0.5"
				>
					<title>Product image</title>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
					/>
				</svg>
			</div>
			<div class="flex gap-3">
				<button
					type="button"
					class="thumb thumb-active w-20 h-20 rounded-xl bg-linear-to-br from-blue-50 to-indigo-100 border-2 border-brand-500 flex items-center justify-center shrink-0 transition"
				>
					<svg
						class="w-8 h-8 text-brand-300"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1"
					>
						<title>Thumbnail 1</title>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
						/>
					</svg>
				</button>
				<button
					type="button"
					class="thumb w-20 h-20 rounded-xl bg-linear-to-br from-slate-50 to-gray-100 border-2 border-gray-200 flex items-center justify-center shrink-0 transition"
				>
					<svg
						class="w-8 h-8 text-gray-300"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1"
					>
						<title>Thumbnail 2</title>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
						/>
					</svg>
				</button>
				<button
					type="button"
					class="thumb w-20 h-20 rounded-xl bg-linear-to-br from-violet-50 to-purple-100 border-2 border-gray-200 flex items-center justify-center shrink-0 transition"
				>
					<svg
						class="w-8 h-8 text-violet-300"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1"
					>
						<title>Thumbnail 3</title>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
						/>
					</svg>
				</button>
				<button
					type="button"
					class="thumb w-20 h-20 rounded-xl bg-linear-to-br from-amber-50 to-orange-100 border-2 border-gray-200 flex items-center justify-center shrink-0 transition"
				>
					<svg
						class="w-8 h-8 text-amber-300"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1"
					>
						<title>Thumbnail 4</title>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};
