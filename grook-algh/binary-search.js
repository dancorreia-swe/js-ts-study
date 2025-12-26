function binarySearch(sort_array, target) {
  let low = 0;
  let high = sort_array.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    const guess = sort_array[mid];

    if (guess === target) return mid;

    if (target > guess) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return null;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 8;

console.log(binarySearch(array, target));
