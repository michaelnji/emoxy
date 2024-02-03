import { describe, expect, test } from "vitest";
import { getAllEmojis } from "../../../lib/main";

describe("Test suite for exposed functions", () => {
	test("returns all emojis", async () => {
		expect(await getAllEmojis().then((res) => res.emojis)).toHaveLength(1791);
	});
});