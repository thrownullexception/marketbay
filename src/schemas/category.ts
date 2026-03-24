import { ColorCodes } from "./colors";

export enum Categories {
	Electronics = "el",
	Clothing = "cl",
	Home = "ho",
	Beauty = "be",
	Food = "fo",
	Books = "bo",
	Movies = "mo",
	Music = "mu",
	Games = "ga",
	Other = "ot",
}

export const CATEGORY_CONFIG: Record<Categories, {
	label: string;
	slug: string;
    color: ColorCodes;
}> = {
	[Categories.Electronics]: {
		label: "Electronics",
		slug: "electronics",
        color: ColorCodes.Blue,
	},
	[Categories.Clothing]: {
		label: "Fashion",
		slug: "clothing",
        color: ColorCodes.Rose,
	},
	[Categories.Home]: {
		label: "Home & Garden",
		slug: "home",
        color: ColorCodes.Emerald,
	},
	[Categories.Beauty]: {
		label: "Beauty & Personal Care",
		slug: "beauty",
        color: ColorCodes.Amber,
	},
	[Categories.Food]: {
		label: "Food & Beverage",
		slug: "food",
        color: ColorCodes.Gray,
	},
	[Categories.Books]: {
		label: "Books & Literature",
		slug: "books",
        color: ColorCodes.Purple,
	},
	[Categories.Movies]: {
		label: "Movies & TV Shows",
		slug: "movies",
        color: ColorCodes.Violet,
	},
	[Categories.Music]: {
		label: "Music & Audio",
		slug: "music",
        color: ColorCodes.Orange,
	},
	[Categories.Games]: {
		label: "Games & Entertainment",
		slug: "games",
        color: ColorCodes.Gray,
	},
	[Categories.Other]: {
		label: "Other Categories",
		slug: "other",
        color: ColorCodes.Gray,
	},
};