import { Emoxy } from "../initiator";

const client = new Emoxy();

export async function getAllEmojis() {
	const data = await client.allEmojis();
	if (data !== null) {
		return data;
	}
	return [];
}