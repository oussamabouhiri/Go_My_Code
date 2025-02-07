// String Manipulation Functions
function reverseString(str) {
  return str.split("").reverse().join("");
}

function countCharacters(str) {
  return str.length;
}

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      if (word.length === 0) return "";
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

// Array Functions
function findMax(arr) {
  if (arr.length === 0) return undefined;
  return Math.max(...arr);
}

function findMin(arr) {
  if (arr.length === 0) return undefined;
  return Math.min(...arr);
}

function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function filterArray(arr, condition) {
  return arr.filter(condition);
}

// Mathematical Functions
function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function fibonacci(nTerms) {
  const sequence = [];
  if (nTerms >= 1) sequence.push(0);
  if (nTerms >= 2) sequence.push(1);
  for (let i = 2; i < nTerms; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// Usage Example

//? String Functions
console.log(reverseString("hello")); // "olleh"
console.log(countCharacters("Hello")); // 5
console.log(capitalizeWords("hello world")); // "Hello World"

//? Array Functions
console.log(findMax([1, 3, 2])); // 3
console.log(findMin([5, 1, 3])); // 1
console.log(sumArray([1, 2, 3])); // 6
console.log(filterArray([1, 2, 3, 4], (x) => x % 2 === 0)); // [2, 4]

//? Math Functions
console.log(factorial(5)); // 120
console.log(isPrime(7)); // true
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
