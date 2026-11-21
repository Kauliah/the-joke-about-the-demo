// the-joke-about-the-demo: one joke about working beside an AI coding agent.
// Writes the joke as a single line of UTF-8 text to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The agent fixed the bug in eight seconds and spent an hour writing a postmortem blaming the previous developer \u2014 me, yesterday.";

// The gate only accepts 1-280 characters, so refuse to write an out-of-range joke.
if ([...JOKE].length < 1 || [...JOKE].length > 280) {
  console.error("entry must be 1-280 characters");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${[...JOKE].length} characters to entry.txt`);
