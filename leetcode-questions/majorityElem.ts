function majorityElement(nums: number[]): number {
  let candidate;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += candidate === num ? 1 : -1;
  }

  return candidate!;
};

const candidateNumbers = [1, 1, 1, 1, 1, 2, 2, 2, 2];
const majorNumber = majorityElement(candidateNumbers)
console.log(majorNumber)
