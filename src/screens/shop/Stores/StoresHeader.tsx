import { ScreenHeader } from "@/screens/_components/screen-header";

export const StoresHeader = () => {
	return (
		<ScreenHeader
			title="Browse Stores"
			description="Discover independent sellers from around the world. Follow your favorites to stay updated on new products and exclusive deals."
		>
			<div class="flex items-center gap-2 text-sm">
				<span class="text-gray-500">1,240 stores</span>
				<span class="text-gray-300">|</span>
				<span class="text-gray-500">87,000+ products</span>
			</div>
		</ScreenHeader>
	);
};
