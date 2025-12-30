function validParentheses(s: string): boolean {
  const stack: string[] = [];
  const pairs = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  for (const char of s) {
    if (pairs.has(char)) {
      const pop = stack.pop();

      if (stack.length === 0 || pop !== pairs.get(char)) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

const parenthesis = "({[{}]})";
console.log(validParentheses(parenthesis)); // true
