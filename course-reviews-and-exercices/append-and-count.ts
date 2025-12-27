function appendAndCount(arr: number[], values: number[]): number {
  if (arr.length <= 0) return 0;

  for (let i = 0; i < values.length; i++) {
    arr.push(values[i]);
  }

  return arr.length;
}
