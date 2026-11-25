// One Line, One Laugh — entry writer.
// Writes a single funny line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// The line: a true-sounding micro-anecdote. One scene, one twist, no explanation.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "At 2 a.m. my neighbour Pak Budi knocked to ask if my dog could keep it down, and my dog was asleep on his doormat.";

// The gate only accepts 1-200 characters; refuse loudly rather than ship an invalid line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry line is ${LINE.length} characters, must be 1-200.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
