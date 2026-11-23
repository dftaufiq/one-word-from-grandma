// One Word From Grandma — make.fun entry.
// Writes exactly one word to /output/entry.txt: "Al".
//
// Why "Al": a grandma reads "AI" as "Al" — a man's name. In many fonts the
// capital letter I and the lowercase letter l look identical, so she thinks
// AI is a person called Al and texts him like a grandchild's friend. The
// whole joke is the mistaken identity, in two letters, with no caption
// needed: warm, a little baffled, tied to AI by the AI/Al wordplay itself,
// and fresh. Chosen from 12 candidates by pairwise judging against the
// published judge brief (see variants.md in the build folder).
//
// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1-30
// characters, not only whitespace. "Al" is 2 bytes, no trailing newline:
// the tie-break is bytes, lower wins, so nothing extra is written.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Al";

if (WORD.length < 1 || WORD.length > 30 || !WORD.trim()) {
  throw new Error(`entry word must be 1-30 chars, got ${WORD.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`Wrote ${WORD.length} chars to /output/entry.txt`);
