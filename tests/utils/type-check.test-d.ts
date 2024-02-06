import { expectTypeOf, test } from "vitest";
import { getSpecificGroups } from "../../src";

test("Types work properly", () => {
	expectTypeOf(getSpecificGroups).parameter(0).toBeString();
});
