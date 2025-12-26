const findTheDifference = (s: string, t: string): string => {
  let arrS = [...s].sort();
  let arrT = [...t].sort();
  const diff = arrT.find((val, index) => val !== arrS[index])?.toString();

  if (diff) return diff.toString();
  return '';
};

findTheDifference("ae", "aea");
