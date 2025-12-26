function containsDuplicate(nums: number[]): boolean {
  const duplicateMap = new Map();

  for (let [index, num] of nums.entries()) {
    if (duplicateMap.has(num)) {
      return true
    }

    duplicateMap.set(num, index);
  }

  return false;
}

const duplicateArr = [1, 2, 3];
console.log(containsDuplicate(duplicateArr));
