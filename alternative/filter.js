let result = [];

function myFilter(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) == true) {
      result.push(arr[i]);
    }
  }
  return result;
}

function checkEven(value) {
  if (value == 2) return true;
}

const list = [1, 2, 3, 4];
let newArr = myFilter(list, checkEven);

console.log(newArr);
