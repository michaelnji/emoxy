import { Emoxy } from "../initiator";
import { EmoxyEmoji } from "../types";

const client = new Emoxy();

export async function getAllEmojis(): Promise<{
	code: number;
	message: string;
	emojis: EmoxyEmoji[];
}> {
	const data = await client.all_emojis();
	return data;
}
