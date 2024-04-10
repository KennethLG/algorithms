function getCombinations(arr) {
  let result = [];
  
  // The function `generate` populates the `result` array with all combinations.
  function generate(current, remaining) {
      // When there are no more elements to consider, add `current` combination to the result.
      if (remaining.length === 0) {
          result.push(current);
          return;
      }

      // Include the first element of `remaining` in the combination.
      generate([...current, remaining[0]], remaining.slice(1));

      // Exclude the first element of `remaining` from the combination.
      generate(current, remaining.slice(1));
  }

  generate([], arr);
  return result;
}

const nums = [1, 2, 3];
const combos = getCombinations(nums);
console.log(combos);