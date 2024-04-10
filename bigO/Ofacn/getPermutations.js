function getPermutations(arr) {
  if (arr.length === 1) {
      return [arr]; // Base case: a single-element array
  }

  const permutations = [];
  for (let i = 0; i < arr.length; i++) {
      const currentNum = arr[i];
      // Get the remaining elements by filtering out the current element
      const remaining = arr.filter((_, index) => index !== i);
      // Recursively get permutations of the remaining elements
      const remainingPermutations = getPermutations(remaining);

      // Prepend the current element to each permutation of the remaining elements
      for (const perm of remainingPermutations) {
          permutations.push([currentNum, ...perm]);
      }
  }
  return permutations;
}

const nums = [1, 2, 3];
const perms = getPermutations(nums);
console.log(perms);
// Output: Array of all permutations of [1, 2, 3]
