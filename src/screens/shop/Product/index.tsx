import { linkOptions } from "@tanstack/solid-router";
import { Breadcrumb } from "@/ui/breadcrumb";
import { Container } from "@/ui/container";
import { Divider } from "@/ui/divider";
import { ProductActions } from "./Actions";
import { ProductDescription } from "./Description";
import { ProductGallery } from "./Gallery";
import { ProductInfo } from "./Info";
import { MoreFromStore } from "./MoreFromStore";
import { ProductOptions } from "./Options";
import { ProductReviews } from "./Reviews";

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
			<Container class="py-8 lg:py-12">
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
			</Container>
			<ProductReviews />
			<MoreFromStore />
		</>
	);
};
