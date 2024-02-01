import ky from "ky";
import { EmoxyEmoji } from "../types";

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
		async all_emojis(): Promise<{
			code: number;
			message: string;
			emojis: EmoxyEmoji[] | unknown;
		}> {
			const url = `${this.BASE_URL}/all`;
			try {
				const response = await ky.get(url).json();
				return {
					code: 200,
					message: "Success",
					emojis: response,
				};
			} catch (error) {
				return {
					code: 500,
					message: "Fetch Error: failed to fetch",
					emojis: [],
				};
			}
		}

		async random_emoji_cat(category: string): Promise<{
			code: number;
			message: string;
			emoji: EmoxyEmoji | unknown;
		}> {
			const url = `${this.BASE_URL}/random/category/${category}`;
			try {
				const response = await ky.get(url).json();
				return {
					code: 200,
					message: "Success",
					emoji: response,
				};
			} catch (error) {
				return {
					code: 500,
					message: "Fetch Error: failed to fetch",
					emoji: {},
				};
			}
		}
		async all_emoji_cat(category: string): Promise<{
			code: number;
			message: string;
			emojis: EmoxyEmoji[] | unknown;
		}> {
			const url = `${this.BASE_URL}/all/category/${category}`;
			try {
				const response = await ky.get(url).json();
				return {
					code: 200,
					message: "Success",
					emojis: response,
				};
			} catch (error) {
				return {
					code: 500,
					message: "Fetch Error: failed to fetch",
					emojis: {},
				};
			}
		}
		async random_emoji_group(group: string): Promise<{
			code: number;
			message: string;
			emoji: EmoxyEmoji | unknown;
		}> {
			const url = `${this.BASE_URL}/random/group/${group}`;
			try {
				const response = await ky.get(url).json();
				return {
					code: 200,
					message: "Success",
					emoji: response,
				};
			} catch (error) {
				return {
					code: 500,
					message: "Fetch Error: failed to fetch",
					emoji: {},
				};
			}
		}
		async all_emoji_group(group: string): Promise<{
			code: number;
			message: string;
			emojis: EmoxyEmoji[] | unknown;
		}> {
			const url = `${this.BASE_URL}/all/group/${group}`;
			try {
				const response = await ky.get(url).json();
				return {
					code: 200,
					message: "Success",
					emojis: response,
				};
			} catch (error) {
				return {
					code: 500,
					message: "Fetch Error: failed to fetch",
					emojis: {},
				};
			}
		}
	}
