import ky from "ky";
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
	// base emojihub API url
	private BASE_URL = "https://emojihub.yurace.pro/api";

	/**
	 * @description gets all emojis
	 * @return {*}  {(Promise<{
	 * 		code: number;
	 * 		message: string;
	 * 		emojis: EmoxyEmoji[] | unknown;
	 * 	}>)}
	 * @memberof Emoxy
	 */
	async all_emojis(): Promise<EmoxyResponseGroup> {
		const url = `${this.BASE_URL}/all`;
		try {
			const response: EmoxyEmoji[] = await ky.get(url).json();
			return {
				code: 200,
				message: "Success",
				emojis: response,
			};
		} catch (error) {
			return {
				code: 500,
				message: "Fetch Error: failed to fetch",
				emojis: null,
			};
		}
	}

	async random_emoji_cat(category: EmoxyEmojiCategory): Promise<EmoxyResponse> {
		const url = `${this.BASE_URL}/random/category/${category}`;
		try {
			const response: EmoxyEmoji = await ky.get(url).json();
			return {
				code: 200,
				message: "Success",
				emoji: response,
			};
		} catch (error) {
			return {
				code: 500,
				message: "Fetch Error: failed to fetch",
				emoji: null,
			};
		}
	}
	async all_emoji_cat(
		category: EmoxyEmojiCategory,
	): Promise<EmoxyResponseGroup> {
		const url = `${this.BASE_URL}/all/category/${category}`;
		try {
			const response: EmoxyEmoji[] = await ky.get(url).json();
			return {
				code: 200,
				message: "Success",
				emojis: response,
			};
		} catch (error) {
			return {
				code: 500,
				message: "Fetch Error: failed to fetch",
				emojis: null,
			};
		}
	}
	async random_emoji_group(group: string): Promise<EmoxyResponse> {
		const url = `${this.BASE_URL}/random/group/${group}`;
		try {
			const response: EmoxyEmoji = await ky.get(url).json();
			return {
				code: 200,
				message: "Success",
				emoji: response,
			};
		} catch (error) {
			return {
				code: 500,
				message: "Fetch Error: failed to fetch",
				emoji: null,
			};
		}
	}
	async all_emoji_group(group: string): Promise<EmoxyResponseGroup> {
		const url = `${this.BASE_URL}/all/group/${group}`;
		try {
			const response: EmoxyEmoji[] = await ky.get(url).json();
			return {
				code: 200,
				message: "Success",
				emojis: response,
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
