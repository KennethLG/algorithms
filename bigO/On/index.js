// O(n) complexity algorithms

const sumArrayElements = (arr) => {
  return arr.reduce((acc, curr) => curr + acc, 0);
}

console.log(sumArrayElements([1, 2, 3, 4]));

const findMaximum = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
  }
  return max;
}

const numbers = [10, 35, 12, 4, 56];
console.log(findMaximum(numbers)); // Outputs: 56