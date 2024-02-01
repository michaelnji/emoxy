import { Emoxy } from "../initiator";
import type { EmoxyEmoji, EmoxyEmojiCategory } from "../types";

const client = new Emoxy();

export async function getRandomEmojiInCategory(
	category: EmoxyEmojiCategory = "smileys-and-people",
): Promise<{ code: number; message: string; emoji: unknown } | null> {
	const data = await client.random_emoji_cat(category);
	return data === null ? null : data;
}

export async function getAllEmojisInCategory(
	category: EmoxyEmojiCategory = "smileys-and-people",
): Promise<{
	code: number;
	message: string;
	emojis: EmoxyEmoji[] | unknown;
} | null> {
	const data = await client.all_emoji_cat(category);
	return data === null ? null : data;
}

export async function getRandomEmojiInGroup(group = "emotion"): Promise<{
	code: number;
	message: string;
	emoji: EmoxyEmoji | unknown;
} | null> {
	const data = await client.random_emoji_group(group);
	return data === null ? null : data;
}

export async function getAllEmojisInGroup(group = "emotion"): Promise<{
	code: number;
	message: string;
	emojis: EmoxyEmoji[] | unknown;
} | null> {
	const data = await client.all_emoji_group(group);
	return data === null ? null : data;
}