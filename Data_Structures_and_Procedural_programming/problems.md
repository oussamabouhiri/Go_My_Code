# Problem Solutions

## Problem 1: Sum of Distinct Elements

### Problem Description

Given two sets of elements, find the sum of all distinct elements present in either of the sets.

#### Example:

- Set 1: `[3, 1, 7, 9]`
- Set 2: `[2, 4, 1, 9, 3]`
- Output: `13` (distinct elements: `4, 7, 2`)

### Algorithm

1. Initialize a variable `sum = 0`.
2. Compare each element of Set 1 with all elements of Set 2:
   - If the element is not present in Set 2, add it to `sum`.
3. Compare each element of Set 2 with all elements of Set 1:
   - If the element is not present in Set 1, add it to `sum`.
4. Return the value of `sum`.

---

## Problem 2: Dot Product and Orthogonal Vectors

### Problem Description

1. Write a function `dotProduct` that calculates the dot product of two vectors.
2. Write an algorithm that determines whether `n` pairs of vectors are orthogonal (their dot product is zero).
3. Modify the algorithm to use a `dotProduct` function instead of a procedure.

### Algorithm

1. **Dot Product**:
   - The dot product of two vectors `v1` and `v2` is calculated as:
     \[
     \text{dotProduct} = v1[0] \cdot v2[0] + v1[1] \cdot v2[1] + \dots + v1[n] \cdot v2[n]
     \]
2. **Orthogonal Vectors**:
   - Two vectors are orthogonal if their dot product is zero.
3. **Steps**:
   - For each pair of vectors, calculate the dot product using the `dotProduct` function.
   - If the result is zero, the vectors are orthogonal.

---

## How to Use the Code

1. Open the `methods.js` file in a code editor or IDE.
2. Run the file using Node.js or in a browser console.
3. Follow the examples provided in the code to test the functions.

---

## Example Outputs

### Problem 1

For Set 1: `[3, 1, 7, 9]` and Set 2: `[2, 4, 1, 9, 3]`:

#### Problem 2

### Look at the js files to see how that work for probelm one and two
