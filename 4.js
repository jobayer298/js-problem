function twoNumber(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null; 
}
const arr = [1, 3, 6, 8, 11, 15];
const target = 9;
const result = twoNumber(arr, target);
console.log(result); 
