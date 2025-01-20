function myEvery(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) != true) {
      return false;
    } else return true;
  }
}

function checkEven(value) {
  if (value === 4) return true;
}

const list = [1, 4];
let newArr = myEvery(list, checkEven);

console.log(newArr);
