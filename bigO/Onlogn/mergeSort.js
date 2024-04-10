const sort = (arr) => {
  return arr;
}

const merge = (left, right) => {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // Concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // Move to the next element in the left array
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // Move to the next element in the right array
    }
  }

  // Concatenate any remaining elements
  // (In case one of the arrays is longer than the other)
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

const result = mergeSort([5,6,2,4,1,9]);
console.log(result)