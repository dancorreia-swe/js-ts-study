let value = 72;

const coinsCounter = {
  100: 0,
  50: 0,
  10: 0,
  5: 0,
  1: 0,
};

const denominations = [...Object.keys(coinsCounter)].sort((a, b) => b - a);

for (const denomination of denominations) {
  while (value >= denomination) {
    coinsCounter[denomination] += 1;
    value -= denomination;
  }
}

console.log(coinsCounter);
