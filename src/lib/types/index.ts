// emoji category types
export type EmoxyEmojiCategory =
	| "smileys-and-people"
	| "animals-and-nature"
	| "food-and-drink"
	| "travel-and-places"
	| "activities"
	| "objects"
	| "symbols"
	| "flags";

export type EmoxyEmoji = {
	name: string;
	category: string;
	group: string;
	htmlCode: string[];
	unicode: string[];
};

export class HTTPError extends Error {}