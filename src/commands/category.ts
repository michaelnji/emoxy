import { Emoxy } from "../initiator";
import type {
	EmoxyEmojiCategory,
	EmoxyResponse,
	EmoxyResponseGroup,
} from "../types";

const client = new Emoxy();

export async function getRandomEmojiInCategory(
	category: EmoxyEmojiCategory = "smileys-and-people",
): Promise<EmoxyResponse | null> {
	const data = await client.random_emoji_cat(category);
	return data === null ? null : data;
}

export async function getAllEmojisInCategory(
	category: EmoxyEmojiCategory = "smileys-and-people",
): Promise<EmoxyResponseGroup | null> {
	const data = await client.all_emoji_cat(category);
	return data === null ? null : data;
}

export async function getRandomEmojiInGroup(
	group = "emotion",
): Promise<EmoxyResponse | null> {
	const data = await client.random_emoji_group(group);
	return data === null ? null : data;
}

export async function getAllEmojisInGroup(
	group = "emotion",
): Promise<EmoxyResponseGroup | null> {
	const data = await client.all_emoji_group(group);
	return data === null ? null : data;
}