var findSumAsNumber = (num1: number, num2: number): number => {
  //   wrong;
  //   return "sum is " + num1 + num2;

  return num1 + num2;
};
var numSum = findSumAsNumber(4, 5);
console.log(numSum);

var findSumAsString = (num1: number, num2: number): string => {
  //   wrong;
  //   return num1 + num2;

  return `sum is ${num1 + num2}`;
};
var stringSum = findSumAsString(4, 5);
console.log(stringSum);

var findSum = (num1: number | string, num2: number | string): string => {
  //   wrong;
  //   return num1 + num2;

  // type guard
  if (typeof num1 == "string" || typeof num2 == "string") {
    return `sum is ${+num1 + +num2}`;
  } else {
    return `sum is ${num1 + num2}`;
  }
};
var sum1 = findSum("4", 5);
console.log(sum1);

var printText = (
  number1: string | number,
  number2: string | number
): string | number => {
  if (typeof number1 == "string" || typeof number1 == "string") {
    return `sum is ${+number1 + +number1}`;
  } else {
    return number1 + number1;
  }
};
