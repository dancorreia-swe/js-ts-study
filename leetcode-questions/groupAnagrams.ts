function groupAnagrams(strs: string[]): string[][] {
  const anagramHash: Record<string, string[]> = {}

  for (let [i, str] of strs.entries()) {
    const stringSet = str.split('').sort().join('');

    if (stringSet in anagramHash) {
      anagramHash[stringSet].push(str);
    } else {
      anagramHash[stringSet] = [str]
    }
  }

  return [...Object.values(anagramHash)]
};

const anagrams = ["eat", "tea", "tan", "ate", "nat", "bat"];

groupAnagrams(anagrams);
