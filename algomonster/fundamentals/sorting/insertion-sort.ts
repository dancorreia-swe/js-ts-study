function insertionSort(arr: number[]) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const key: number = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

const unsortedArr = [12, 10, 1, 15, 16, 2];
console.log(insertionSort(unsortedArr));
