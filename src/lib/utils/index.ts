import { EmoxyEmojiCategory } from "../types";

export const data = [
	{
		name: "smileys-and-people",
		group: [
			"body",
			"cat-face",
			"clothing",
			"creature-face",
			"emotion",
			"face-negative",
			"face-neutral",
			"face-positive",
			"face-role",
			"face-sick",
			"family",
			"monkey-face",
			"person",
			"person-activity",
			"person-gesture",
			"person-role",
			"skin-tone",
		],
	},
	{
		name: "animals-and-nature",
		group: [
			"animal-amphibian",
			"animal-bird",
			"animal-bug",
			"animal-mammal",
			"animal-marine",
			"animal-reptile",
			"plant-flower",
			"plant-other",
		],
	},
	{
		name: "food-and-drink",
		group: [
			"dishware",
			"drink",
			"food-asian",
			"food-fruit",
			"food-prepared",
			"food-sweet",
			"food-vegetable",
		],
	},
	{
		name: "travel-and-places",
		group: ["travel-and-places"],
	},
	{
		name: "activities",
		group: ["activities"],
	},
	{
		name: "objects",
		group: ["objects"],
	},
	{
		name: "symbols",
		group: ["symbols"],
	},
	{
		name: "flags",
		group: ["flags"],
	},
];

export function getAllCategories(): string[] {
	return data.map((x) => x.name);
}
export function getAllgroups(): string[][] | string {
	return data.map((x) => x.group);
}

export function getSpecificGroups(category: EmoxyEmojiCategory | string) {
	return data.filter((x) => x.name === category).map((x) => x.group)[0];
}
