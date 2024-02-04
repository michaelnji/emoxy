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
	for (let i = 0; i < cat.length; i++) {
		const res = await getAllEmojisInCategory(cat[i]);
		const res_single = await getRandomEmojiInCategory(cat[i]);
		const currentGroup = getSpecificGroups(cat[i]);

		test.concurrent(
			`Returns a truthy response for ${cat[i]} category`,
			async () => {
				expect(res).toBeTruthy();
			},
		);
		test.concurrent(`Returns emojis for ${cat[i]} category`, async () => {
			expect(res?.emojis?.length).toBeGreaterThanOrEqual(1);
		});

		test.concurrent(
			`Returns a random emoji for ${cat[i]} category`,
			async () => {
				expect(res_single?.emoji?.name).toBeDefined();
			},
		);

		for (let j = 0; j < currentGroup.length; j++) {
			const group = currentGroup[j];
			const resGroup = await getAllEmojisInGroup(group);
			const resGroupSingle = await getRandomEmojiInGroup(group);
			test.concurrent(`Returns emojis for ${group} group`, async () => {
				expect(resGroup?.emojis?.length).toBeGreaterThanOrEqual(1);
			});
			test.concurrent(`Returns random emoji from ${group} group`, async () => {
				expect(resGroupSingle?.emoji?.name).toBeDefined();
			});
		}
	}
}, 40000);
