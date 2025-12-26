function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();

  for (let num of nums) {
    map.set(num, map.get(num) + 1 || 1);
  }

  const elements = [...map].sort((a, b) => a[1] - b[1])
    .map(([key, _]) => key)
    .reverse()
    .splice(0, k)

  return elements || [];
};

const elems = [3, 0, 1, 0];

const k = 1;

console.log(topKFrequent(elems, k));
