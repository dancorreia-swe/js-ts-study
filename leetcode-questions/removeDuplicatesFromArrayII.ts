function removeDuplicates(nums: number[]): number {
  let r = 0;
  let l = 0;

  while (r < nums.length) {
    let count = 1;
    while (r + 1 < nums.length && nums[r] == nums[r + 1]) {
      r++;
      count += 1;
    }

    for (let i = 0; i < Math.min(2, count); i++) {
      nums[l] = nums[r];
      l++;
    }
    r++;
  }

  return l;
};
