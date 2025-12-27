function linearSearch(list: number[], target: number): number {
  for (const [index, currNumber] of list.entries()) {
    if (currNumber === target) return index;
  }

  return -1;
}

const list = [10, 23, 45, 99, 122];
const index = linearSearch(list, 99);
console.log(index);
