import { describe, expectTypeOf, test } from "vitest";
import { Emoxy } from "../../src/initiator";
import { data } from "../../src/utils";
import { EmoxyResponse, EmoxyResponseGroup } from "../../src/types";

const client = new Emoxy();

describe("typechecks for Emoxy class", () => {
	test("typecheck for return type of all_emoji_cat", async () => {
		expectTypeOf(
			await client.all_emoji_cat(data[0].name),
		).toMatchTypeOf<EmoxyResponseGroup>();
	});

	test("typecheck for return type of all_emoji_group", async () => {
		expectTypeOf(
			await client.all_emoji_group(data[0].group[0]),
		).toMatchTypeOf<EmoxyResponseGroup>();
	});
	test("typecheck for return type of all_emojis", async () => {
		expectTypeOf(await client.all_emojis()).toMatchTypeOf<EmoxyResponseGroup>();
	});
	test("typecheck for return type of random_emoji_cat", async () => {
		expectTypeOf(
			await client.random_emoji_cat(data[0].name),
		).toMatchTypeOf<EmoxyResponse>();
	});
	test("typecheck for return type of random_emoji_cat", async () => {
		expectTypeOf(
			await client.random_emoji_group(data[0].group[0]),
		).toMatchTypeOf<EmoxyResponse>();
	});
});
