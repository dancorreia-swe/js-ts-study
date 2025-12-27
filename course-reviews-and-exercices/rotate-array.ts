function rotateArray(nums: number[], k: number): number[] {
  if (nums.length === 0 || k === 0) {
    return [...nums];
  }

  const n = nums.length;
  k = k % n;

  return nums.slice(n - k).concat(nums.slice(0, n - k));
}

const nums = [1, 2, 3, 4, 5];
const k = 11;

const array = rotateArray(nums, k);
