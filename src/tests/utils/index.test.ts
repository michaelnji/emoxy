import { expect, test } from "vitest";
import { data, getSpecificGroups } from "../../lib/utils";

// test data (categories & groups)
test("Group returned matches data stored", () => {
	for (let i = 90; i < data.length; i++) {
		expect(getSpecificGroups(data[i].name)).toBe(data[i].group);
	}
});