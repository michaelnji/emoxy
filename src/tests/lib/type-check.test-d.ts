import { expectTypeOf, test, describe } from "vitest";
import { Emoxy } from "../../lib/initiator";
import { data } from "../../lib/utils";
import { EmoxyEmoji } from "../../lib/types";

const client = new Emoxy();

describe("typechecks for Emoxy class", () => {
	test("typecheck for return type of all_emoji_cat", async () => {
		expectTypeOf(await client.all_emoji_cat(data[0].name)).toMatchTypeOf<{
			code: number;
			message: string;
			emojis: EmoxyEmoji[] | unknown;
		}>();
	});

	test("typecheck for return type of all_emoji_group", async () => {
		expectTypeOf(await client.all_emoji_group(data[0].group[0])).toMatchTypeOf<{
			code: number;
			message: string;
			emojis: EmoxyEmoji[] | unknown;
		}>();
	});
	test("typecheck for return type of all_emojis", async () => {
		expectTypeOf(await client.all_emojis()).toMatchTypeOf<{
			code: number;
			message: string;
			emojis: EmoxyEmoji[] | unknown;
		}>();
	});
	test("typecheck for return type of random_emoji_cat", async () => {
		expectTypeOf(await client.random_emoji_cat(data[0].name)).toMatchTypeOf<{
			code: number;
			message: string;
			emoji: EmoxyEmoji | unknown;
		}>();
	});
	test("typecheck for return type of random_emoji_cat", async () => {
		expectTypeOf(
			await client.random_emoji_group(data[0].group[0]),
		).toMatchTypeOf<{
			code: number;
			message: string;
			emoji: EmoxyEmoji | unknown;
		}>();
	});
});
