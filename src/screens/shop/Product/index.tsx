import { linkOptions } from "@tanstack/solid-router";
import { Breadcrumb } from "@/ui/breadcrumb";
import { Divider } from "@/ui/divider";
import { MoreFromStore } from "./MoreFromStore";
import { ProductActions } from "./ProductActions";
import { ProductDescription } from "./ProductDescription";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { ProductOptions } from "./ProductOptions";
import { ProductReviews } from "./ProductReviews";

export const ShopProductScreen = () => {
	return (
		<>
			<Breadcrumb
				items={[
					{ label: "Home", link: linkOptions({ to: "/" }) },
					{ label: "Electronics", link: linkOptions({ to: "/categories" }) },
					{
						label: "Headphones",
						link: linkOptions({
							to: "/category/$categorySlug",
							params: { categorySlug: "todo" },
						}),
					},
					{
						label: "Pro Studio Wireless Headphones",
						link: linkOptions({
							to: "/product/$productSlug",
							params: { productSlug: "todo" },
						}),
					},
				]}
			/>

			<main class="max-w-7xl mx-auto px-4 py-8 lg:py-12">
				<div class="grid lg:grid-cols-2 gap-8 lg:gap-14">
					<ProductGallery />
					<div>
						<ProductInfo />
						<Divider />
						<ProductOptions />
						<ProductActions />
						<Divider />
					</div>
				</div>
				<ProductDescription />
				<ProductReviews />
				<MoreFromStore />
			</main>
		</>
	);
};
