// find the position of an element in a sorted array

const binarySearch = (arr, value) => {
  let result = 0;
  let low = 0;
  let high = arr.length - 1;
  while(true) {

    let mid = Math.floor(low + (high - low) / 2);
    
    if (value == arr[mid]) {
      result = mid;
      break;
    }

    if (value < arr[mid]) {
      high = mid-1;
      continue;
    }

    if (value > arr[mid]){
      low = mid+1;
      continue;
    }
  }

  return result;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 7));