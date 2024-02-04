import { expect, test } from "vitest";
import { data, getSpecificGroups } from "../../src/lib/utils";

// test data (categories & groups)
test("Group returned matches data stored", () => {
	for (const i of data) {
		expect(getSpecificGroups(i.name)).toBe(i.group);
	}
});
