import { expectTypeOf, test } from "vitest";
import { getSpecificGroups } from "../../src/lib/main";

test("Types work properly", () => {
	expectTypeOf(getSpecificGroups).parameter(0).toBeString();
});
