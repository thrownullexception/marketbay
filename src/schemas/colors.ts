
export enum ColorCodes {
	Blue = "blue",
	Rose = "rose",
	Emerald = "emerald",
	Orange = "orange",
	Violet = "violet",
	Amber = "amber",
	Purple = "purple",
	Gray = "gray",
}

export const COLOR_CODES: Record<
	ColorCodes,
	{
		banner: string;
		avatar: string;
	}
> = {
	[ColorCodes.Blue]: {
		banner: "from-blue-500 to-indigo-600",
		avatar: "from-blue-500 to-indigo-600",
	},
	[ColorCodes.Rose]: {
		banner: "from-rose-500 to-pink-600",
		avatar: "from-rose-500 to-pink-600",
	},
	[ColorCodes.Emerald]: {
		banner: "from-emerald-500 to-teal-600",
		avatar: "from-emerald-500 to-teal-600",
	},
	[ColorCodes.Amber]: {
		banner: "from-amber-400 to-yellow-600",
		avatar: "from-amber-500 to-yellow-600",
	},
	[ColorCodes.Purple]: {
		banner: "from-purple-500 to-violet-600",
		avatar: "from-violet-500 to-purple-600",
	},
	[ColorCodes.Orange]: {
		banner: "from-orange-400 to-amber-600",
		avatar: "from-orange-500 to-amber-600",
	},
	[ColorCodes.Violet]: {
		banner: "from-purple-500 to-violet-600",
		avatar: "from-purple-500 to-violet-600",
	},
	[ColorCodes.Gray]: {
		banner: "from-gray-500 to-gray-600",
		avatar: "from-gray-500 to-gray-600",
	},
};