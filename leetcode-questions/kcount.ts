function removeElement(nums: number[], val: number): number {
  let i: number = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }

    console.log(nums);
  }

  return i;
}

const nums = [3, 2, 2, 3];
const val = 3;
console.log(removeElement(nums, val));
