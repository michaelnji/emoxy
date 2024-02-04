import { describe, expect, test } from "vitest";
import {
	getAllCategories,
	getAllEmojis,
	getAllEmojisInCategory,
	getAllEmojisInGroup,
	getRandomEmojiInCategory,
	getRandomEmojiInGroup,
	getSpecificGroups,
} from "../../../src/lib/main";

describe("Test suite for exposed functions", async () => {
	test("returns all emojis", async () => {
		expect(await getAllEmojis().then((res) => res.emojis)).toHaveLength(1791);
	});

	const cat = getAllCategories();
	for (const i of cat) {
		const res = await getAllEmojisInCategory(i);
		const res_single = await getRandomEmojiInCategory(i);
		const currentGroup = getSpecificGroups(i);

		test.concurrent(`Returns a truthy response for ${i} category`, () => {
			expect(res).toBeTruthy();
		});
		test.concurrent(`Returns emojis for ${i} category`, () => {
			expect(res?.emojis?.length).toBeGreaterThanOrEqual(1);
		});

		test.concurrent(`Returns a random emoji for ${i} category`, () => {
			expect(res_single?.emoji?.name).toBeDefined();
		});

		for (const group of currentGroup) {
			const resGroup = await getAllEmojisInGroup(group);
			const resGroupSingle = await getRandomEmojiInGroup(group);
			test.concurrent(`Returns emojis for ${group} group`, () => {
				expect(resGroup?.emojis?.length).toBeGreaterThanOrEqual(1);
			});
			test.concurrent(`Returns random emoji from ${group} group`, () => {
				expect(resGroupSingle?.emoji?.name).toBeDefined();
			});
		}
	}
}, 40000);
