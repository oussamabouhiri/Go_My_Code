// Initialize counters
let charCount = 0;
let wordCount = 0;
let vowelCount = 0;

// Define vowels
const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

// Read the sentence (for demonstration, we'll use a predefined sentence)
const sentence = "Hello world.";

// Process the sentence character by character
for (let i = 0; i < sentence.length; i++) {
  const char = sentence[i];
  charCount++;

  // Check if the character is a vowel
  if (vowels.has(char)) {
    vowelCount++;
  }

  // Check if the character is a space
  if (char === " ") {
    wordCount++;
  }

  // Stop if the character is a point
  if (char === ".") {
    break;
  }
}

// Increment word count by 1 for the last word
wordCount++;

// Output the results
console.log(`Length of the sentence: ${charCount} characters`);
console.log(`Number of words: ${wordCount}`);
console.log(`Number of vowels: ${vowelCount}`);
