import { Emoxy } from "../initiator";

const client = new Emoxy();

export async function getAllEmojis() {
	const data = await client.all_emojis();
	return data === null ? [] : data;
}