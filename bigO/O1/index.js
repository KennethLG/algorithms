// O(1) complexity algorithms

const getElementAtIndex = (arr, i) => {
  return arr[i];
}

const myArray = [10, 20, 30, 40, 50];
console.log(getElementAtIndex(myArray, 3)); // Outputs: 40

const isEven = (n) => {
  return n % 2 === 0;
}

console.log(isEven(4)); // Outputs: true
console.log(isEven(5)); // Outputs: false