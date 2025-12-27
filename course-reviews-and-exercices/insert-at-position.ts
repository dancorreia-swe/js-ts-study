function insertAtPosition(
  arr: number[],
  index: number,
  value: number,
): number[] {
  arr.push(0);

  for (let i = arr.length - 1; i > index; i--) {
    arr[i] = arr[i - 1];
  }

  arr[index] = value;

  return arr;
}
