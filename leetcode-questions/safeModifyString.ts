function safeModifyString(s: string, index: number, newChar: string): string {
  const newStr: string[] = s.split("");

  if (newStr[index]) {
    newStr[index] = newChar;
  }

  return newStr.join("");
}

const nameChanged = safeModifyString("daniel", 1, "A");
console.log(nameChanged);
