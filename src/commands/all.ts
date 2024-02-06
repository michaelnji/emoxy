import { Emoxy } from "../initiator";
import { EmoxyResponseGroup } from "../types";

const client = new Emoxy();

export async function getAllEmojis(): Promise<EmoxyResponseGroup> {
	const data = await client.all_emojis();
	return data;
}
