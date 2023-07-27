// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const arr = [2, -5, 10, -3, 7]; 
const func = () =>{
    let sum = 0
    for(const num of arr){
        if(num > 0){
            sum += num
        }
    }
    return sum;
}

console.log(func());