// primitives - number, string, boolean

var customerName: string = "sunil";
var customerAge: number = 26;
var isAdmin: boolean = true;

// wrong
// var customerName: string = 26;
// var customerAge: number = "26";
// var isAdmin: boolean = "true";

// type safted method
var getSum = (num1: number, num2: number, name: string, isWithName: boolean) => {
  return (isWithName ? `hi ${name}\n` : "") + `sum is ${num1 + num2}`;
};

//wrong
// var value = sum("10", 20, "shamodha", "true");

var value = getSum(+"10", 20, "shamodha", true);
console.log(value);
