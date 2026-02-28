import "./styles.css";
import { BestSellers } from "./BestSellers";
import { DealsTicker } from "./DealsTicker";
import { MainBanner } from "./MainBanner";
import { NewArrivals } from "./NewArrivals";
import { PopularStores } from "./PopularStores";
import { ShopByCategory } from "./ShopByCategory";
import { TodaysDeals } from "./TodaysDeals";
import { TrustBar } from "./TrustBar";

export const HomeScreen = () => {
	return (
		<>
			<MainBanner />
			<DealsTicker />
			<ShopByCategory />
			<TodaysDeals />
			<PopularStores />
			<NewArrivals />
			<BestSellers />
			<TrustBar />
		</>
	);
};
