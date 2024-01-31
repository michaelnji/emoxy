import axios from "axios";
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
	 * @description Gets all emojis from the API
	 * @return {*}  {(Promise<EmoxyEmoji[] | null>)}
	 * @memberof Emoxy
	 */
	async allEmojis(): Promise<EmoxyEmoji[] | null> {
		const url = `${this.BASE_URL}/all`;
		try {
			const response = await axios.get(url);
			const emojis = await response.data;
			return emojis;
		} catch (error) {
			return null;
		}
	}
}
