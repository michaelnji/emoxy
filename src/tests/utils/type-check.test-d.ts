import { expectTypeOf } from "vitest";
import { getSpecificGroups } from "../../lib/utils";

test("Types work properly", () => {
	expectTypeOf(getSpecificGroups).parameter(0).toBeString();
});