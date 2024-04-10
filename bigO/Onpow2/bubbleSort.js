const bubbleSort = (arr) => {
  let n = arr.length;
  let swapped;
  do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
          // Compare the adjacent positions
          if (arr[i] > arr[i + 1]) {
              // Swap if the elements are in the wrong order
              let temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;
              swapped = true; // Mark that a swap occurred
          }
      }
      // Reduce the length of `n` since the last element is correctly sorted
      n--;
  } while (swapped); // If no elements were swapped, the array is sorted
  return arr;
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array));