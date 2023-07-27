function romanToInt(roman) {
  const romanValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let prev = 0;
  for (let i = roman.length - 1; i >= 0; i--) {
    const currentChar = roman[i];
    const currentValue = romanValue[currentChar];

    if (currentValue < prev) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
    prev = currentValue;
  }
  return result;
}
console.log(romanToInt("X"));
