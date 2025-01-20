let result = [];

function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) == true) {
      result.push(arr[i]);
      break;
    }
  }
  return result;
}

function checkEven(value) {
  if (value == 3) return true;
}

const list = [1, 3, 3, 4];
let newArr = myFind(list, checkEven);

console.log(newArr);