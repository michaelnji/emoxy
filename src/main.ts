import { getAllEmojis } from "./lib/main";

async function grt() {
	const d = await getAllEmojis();

	console.log(d);
}

grt();