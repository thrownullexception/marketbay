import { ProductCardGrid } from "./grid";
import { ProductCardList } from "./list";

export type ViewMode = "grid" | "list";

export let viewMode: ViewMode = "grid";

export function setViewMode(mode: ViewMode) {
	viewMode = mode;
}

export interface ProductCardData {
	storeName: string;
	name: string;
	rating?: string;
	ratingCount?: string;
	price: string;
	originalPrice?: string;
	badge?: string;
	badgeColor?: string;
	wishlisted?: boolean;
}

export const ProductCard = (props: { product: ProductCardData }) => {
	if (viewMode === "list") {
		return <ProductCardList product={props.product} />;
	}
	return <ProductCardGrid product={props.product} />;
};
