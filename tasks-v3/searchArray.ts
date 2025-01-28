// Написать функцию, которая на вход принимает два массива и возвращает новый массив
// с элементами найденными только в одном массиве, но не в обоих.

function searchArray(arr1: any[], arr2: any[]): any[] {
  const combined = [...arr1, ...arr2];
  return combined.filter(
    (item) => !arr1.includes(item) || !arr2.includes(item)
  );
}

console.log(searchArray([1, 2, 3, 4], [1, 2, 4, 4]));  //[3]
console.log(searchArray([3, 3, 3, 4], [4, 4, 4, 4]));  //[3, 3, 3] 
console.log(searchArray([3, 8, 5, 4], [4, 1, 10, 4]));  //[3, 8, 5, 1, 10]
