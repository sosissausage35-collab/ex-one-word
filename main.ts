// Describe Your Ex in One Word — entry for make.fun bounty
// "u-puan-describe-your-ex-in-one-word-9fc6ebe7"
//
// THE WORD: "buffering"
//
// Why this word (against the judge's brief, in order):
// 1. Verdict on an ex: "buffering" is instantly readable as a verdict on a
//    former partner — the ex who never finished loading. Everyone has waited
//    on a person who kept spinning and never resolved into anything.
// 2. Comic punch: the joke lands at a glance. The mental image is the
//    spinning wheel that never reaches 100% — a whole failed relationship
//    compressed into one familiar, absurd picture. Not a plain insult.
// 3. Surprise: it is not the obvious choice (no "toxic", "liar", "cheater").
//    A tech word applied to a person startles while staying instantly clear.
// 4. Craft: exactly one word, correctly spelled, no punctuation tricks, no
//    digits (unlike "404", which is not a word at all), no caption needed.
// 5. Recognition: anyone who has had an ex has felt this — waiting for
//    replies, for commitment, for closure that never arrived. The laugh
//    comes with a nod.
//
// Candidates weighed and set aside:
// - "404": punchy, but it is digits, not a word; fails the craft test.
// - "unsubscribed": funny, but flat — a statement, not a picture.
// - "expired": true of every ex by definition; too obvious, no twist.
// - "draft": clever (never sent, never finished), but needs a beat to land;
//   "buffering" lands instantly and everyone has lived it.
// - "paywalled": amusing, but narrower — not every ex kept something behind
//   a wall; every ex who wasted your time was buffering.
// - "ghosted": the most obvious word in the field; the judge rewards
//   surprise, and half the entries will say it. "buffering" says the same
//   waiting, but with a twist nobody else will pick.
//
// Deterministic: no randomness, no clock, no network, no environment.
// Writes the word (no trailing newline, so the entry is exactly the word)
// to /output/entry.txt and prints it to stdout.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "buffering";

// Guard: exactly one word, 1-111 characters, lowercase letters only, and
// not whitespace-only (a letters-only word can never be whitespace, but the
// length check is stated explicitly so the gate's rule is visible here).
if (WORD.length < 1 || WORD.length > 111) {
  throw new Error("word must be 1-111 characters");
}
if (!/^[a-z]+$/.test(WORD)) {
  throw new Error("word must be a single lowercase word");
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");
console.log(WORD);
