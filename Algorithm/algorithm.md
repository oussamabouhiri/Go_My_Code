# Algorithm to Analyze a Sentence

## Problem Statement

Write an algorithm that reads a sentence (ending with a point) character by character and determines:

1. The length of the sentence (number of characters).
2. The number of words in the sentence.
3. The number of vowels in the sentence.

## Algorithm Steps

1. Initialize three counters:
   - `char_count` for the number of characters.
   - `word_count` for the number of words.
   - `vowel_count` for the number of vowels.
2. Read the sentence character by character.
3. For each character:
   - Increment `char_count`.
   - If the character is a vowel (`a`, `e`, `i`, `o`, `u`), increment `vowel_count`.
   - If the character is a space, increment `word_count`.
4. Stop when the character is a `.` (point).
5. Increment `word_count` by 1 (since the last word won't be followed by a space).
6. Output the results.

## Example

### look in js file
