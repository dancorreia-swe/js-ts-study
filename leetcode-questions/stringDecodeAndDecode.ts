class Solution {
  encode(strs: string[]) {
    let encodedStr = '';
    for (let str of strs) {
      encodedStr += str.length + '#' + str
    };

    return encodedStr;
  }

  decode(str: string) {
    const arrStr: string[] = [];
    let i = 0;

    while (i < str.length) {
      let j = i;

      while (str[j] !== '#') {
        j++
      }

      const len = Number(str.slice(i, j))
      arrStr.push(str.slice(j + 1, j + 1 + len))
    }

    return arrStr;
  }
}

const solution = new Solution();
const strs = ['abc', 'def', 'ghi'];
const encodedStr = solution.encode(strs); // 3#abc3#def3#ghi
console.log(encodedStr);
console.log(solution.decode(encodedStr));
