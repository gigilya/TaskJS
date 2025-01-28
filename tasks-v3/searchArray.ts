// Написать функцию, которая на вход принимает два массива и возвращает новый массив
// с элементами найденными только в одном массиве, но не в обоих.

function searchArray(arr1: any[], arr2: any[]): any[] {
  const combined = [...arr1, ...arr2];
  return combined.filter(
    (item) => !arr1.includes(item) || !arr2.includes(item)
  );
}

// input
// const arr1: any[] = [1, 2, 3, 5];
// const arr2: any[] = [1, 2, 3, 4];
// console.log(searchArray(arr1, arr2));

// output
// [ 5, 4 ]
