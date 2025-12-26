/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let start = 0
  let mid = 0;
  let end = nums.length - 1;

  const swap = (arr: number[], pos1: number, pos2: number): void => {
    const tmp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = tmp;
  }

  while (mid <= end) {
    switch (nums[mid]) {
      case 0:
        // Swap with start index
        swap(nums, start, mid)
        start++;
        mid++;
        break;
      case 1:
        // ignore
        mid++;
        break;
      case 2:
        // Swap with final index
        swap(nums, mid, end)
        end--;
        break;
    }
  }
}

const nums = [2, 0, 2, 1, 1, 0]

