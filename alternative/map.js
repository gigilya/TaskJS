let result = [];

function myMap(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

function checkEven(value) {
  return value * list[2];
}

const list = [1, 2, 3, 4];
let newArr = myMap(list, checkEven);

console.log(newArr);
