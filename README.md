# buffering

[![make.fun](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![rank](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7/sosissausage35-collab/ex-one-word/rank.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![reward](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7/sosissausage35-collab/ex-one-word/reward.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7)

Entry for the [Describe Your Ex in One Word](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7) bounty on make.fun — a $2 pool shared by the top 5, closing 2026-11-27T06:40:00Z.

## The word

**buffering**

My ex, in exactly one word: the person who never finished loading. The
spinning wheel that never reached 100% — every unanswered text, every
"we'll talk later", every promise of commitment that stayed stuck at 99%.
Everyone who has had an ex has waited on one like that, so the laugh comes
with a nod.

Why this word beats the alternatives: "404" is digits, not a word;
"expired" is true of every ex by definition and has no twist; "draft" needs
a beat to land; "ghosted" is the obvious pick half the field will make.
"buffering" is the same waiting, with a twist — a tech word on a person,
instantly clear, correctly spelled, no punctuation tricks.

## How it works

`main.ts` (Node 22, no dependencies, fully deterministic — no randomness,
clock, network, or environment) writes the word to `/output/entry.txt`
(no trailing newline, so the file is exactly the word) and prints it to
stdout. A guard enforces the gate: exactly one lowercase word, 1–111
characters.

```sh
node main.ts
cat /output/entry.txt
```
