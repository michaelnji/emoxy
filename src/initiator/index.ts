import {
	EmoxyEmoji,
	EmoxyEmojiCategory,
	EmoxyResponse,
	EmoxyResponseGroup,
} from "../types";

/**
 * @description Class for emoxy js client
 * @export
 * @class Emoxy
 */
export class Emoxy {
	/**
	 * @description Emojihub api URL
	 * @private
	 * @memberof Emoxy
	 */
	private BASE_URL = "https://emojihub.yurace.pro/api";

	/**
	 * @description Gets all emojis
	 * @return {*}  {Promise<EmoxyResponseGroup>}
	 * @memberof Emoxy
	 */
	async all_emojis(): Promise<EmoxyResponseGroup> {
		const url = `${this.BASE_URL}/all`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			const emojis: EmoxyEmoji[] = data;
			return {
				code: 200,
				message: "Success",
				emojis,
			};
		} catch (error) {
			return {
				code: 500,
				message: `${error}`,
				emojis: null,
			};
		}
	}

	/**
	 * @description Returns a random emoji from a given category
	 * @param {EmoxyEmojiCategory} category
	 * @return {*}  {Promise<EmoxyResponse>}
	 * @memberof Emoxy
	 */
	async random_emoji_cat(category: EmoxyEmojiCategory): Promise<EmoxyResponse> {
		const url = `${this.BASE_URL}/random/category/${category}`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			const emoji: EmoxyEmoji = data;
			return {
				code: 200,
				message: "Success",
				emoji,
			};
		} catch (error) {
			return {
				code: 500,
				message: "Fetch Error: failed to fetch",
				emoji: null,
			};
		}
	}

	/**
	 * @description Gets all emojis from a given category
	 * @param {EmoxyEmojiCategory} category
	 * @return {*}  {Promise<EmoxyResponseGroup>}
	 * @memberof Emoxy
	 */
	async all_emoji_cat(
		category: EmoxyEmojiCategory,
	): Promise<EmoxyResponseGroup> {
		const url = `${this.BASE_URL}/all/category/${category}`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			const emojis: EmoxyEmoji[] = data;
			return {
				code: 200,
				message: "Success",
				emojis,
			};
		} catch (error) {
			return {
				code: 500,
				message: "Fetch Error: failed to fetch",
				emojis: null,
			};
		}
	}

	/**
	 * @description Gets a random emoji from a given group
	 * @param {string} group
	 * @return {*}  {Promise<EmoxyResponse>}
	 * @memberof Emoxy
	 */
	async random_emoji_group(group: string): Promise<EmoxyResponse> {
		const url = `${this.BASE_URL}/random/group/${group}`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			const emoji: EmoxyEmoji = data;
			return {
				code: 200,
				message: "Success",
				emoji,
			};
		} catch (error) {
			return {
				code: 500,
				message: "Fetch Error: failed to fetch",
				emoji: null,
			};
		}
	}

	/**
	 * @description Gets all emojis from a given group
	 * @param {string} group
	 * @return {*}  {Promise<EmoxyResponseGroup>}
	 * @memberof Emoxy
	 */
	async all_emoji_group(group: string): Promise<EmoxyResponseGroup> {
		const url = `${this.BASE_URL}/all/group/${group}`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			const emojis: EmoxyEmoji[] = data;
			return {
				code: 200,
				message: "Success",
				emojis,
			};
		} catch (error) {
			return {
				code: 500,
				message: "Fetch Error: failed to fetch",
				emojis: null,
			};
		}
	}
}


