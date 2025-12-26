function twoSum(nums: number[], target: number): number[] {
  const hashSum: Record<any, any> = {}

  for (let i = 0; i < nums.length; i++) {
    const sumTarget = target - nums[i];

    if (nums[i] in hashSum) {
      return [i, hashSum[nums[i]]];
    }

    if (!hashSum[sumTarget]) {
      hashSum[sumTarget] = i
    }
  }

  return [];
}

function twoSumTwo(nums: number[], target: number): number[] {
  const sumMap: Record<any, any> = {}

  for (let [index, num] of nums.entries()) {
    const diff = target - num;
      
    if (num in sumMap) {
      return [index, sumMap[num]]
    }

    sumMap[diff] = index;
  }

  return [];
}

