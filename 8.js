// second largest number in array


const arr = [2, 65, 3, 6, 4, 7, 34, 56, 9];

const func = () =>{
    const desc = arr.sort((a, b) =>{
       return b - a;
    })
    return desc[1]
}

console.log(func());
