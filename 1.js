// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const func = (str) =>{
    const result = str.split('').reduce((prev, curr) => `${curr}${prev}`)
    return result
}
console.log(func("hello world"));