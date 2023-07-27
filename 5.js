// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const func = (a, b, operator) =>{
    return eval(("The result is ", a + operator + b))
}

console.log(func(1,2, "+"));

// const func = (a, b, operator) => {
//  return operator === "+" ? a + b : operator === "-" ? a - b : operator === "*" ? a * b : operator === "/" ? a / b : "wrong operator";
// };

// console.log(func(4, 2, "+"));
// console.log(func(4, 2, "-"));
// console.log(func(4, 2, "*"));
// console.log(func(4, 2, "/"));
