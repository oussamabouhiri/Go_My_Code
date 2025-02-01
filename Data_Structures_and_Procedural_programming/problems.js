// Problem 1: Sum of Distinct Elements
function sumOfDistinctElements(set1, set2) {
  let sum = 0;

  // Check elements in set1 that are not in set2
  for (let i = 0; i < set1.length; i++) {
    if (!set2.includes(set1[i])) {
      sum += set1[i];
    }
  }

  // Check elements in set2 that are not in set1
  for (let i = 0; i < set2.length; i++) {
    if (!set1.includes(set2[i])) {
      sum += set2[i];
    }
  }

  return sum;
}

// Example usage for Problem 1
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
console.log("Sum of distinct elements:", sumOfDistinctElements(set1, set2)); // Output: 13

// Problem 2: Dot Product and Orthogonal Vectors

// Part 1: Dot Product Function
function dotProduct(v1, v2) {
  let product = 0;
  for (let i = 0; i < v1.length; i++) {
    product += v1[i] * v2[i];
  }
  return product;
}

// Part 2: Orthogonal Vectors Function
function areVectorsOrthogonal(v1, v2) {
  return dotProduct(v1, v2) === 0;
}

// Part 3: Check n Pairs of Vectors
function checkOrthogonalPairs(vectorPairs) {
  for (let i = 0; i < vectorPairs.length; i++) {
    const [v1, v2] = vectorPairs[i];
    const isOrthogonal = areVectorsOrthogonal(v1, v2);
    console.log(
      `Pair ${i + 1}: Vectors are ${
        isOrthogonal ? "orthogonal" : "not orthogonal"
      }`
    );
  }
}

// Example usage for Problem 2
const vectorPairs = [
  [
    [1, 0, 0],
    [0, 1, 0],
  ], // Orthogonal
  [
    [1, 2, 3],
    [4, 5, 6],
  ], // Not orthogonal
  [
    [0, 0, 1],
    [1, 0, 0],
  ], // Orthogonal
];
checkOrthogonalPairs(vectorPairs);
