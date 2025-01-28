// Написать функцию, которая на вход принимает массив и еще один или несколько аргументов (точное количество не известно).
// Удалить из массива все элементы, которые имеют то же значение, что и эти аргументы.

function deleteValue(arr: any[], ...args: any[]): any[] {
  return arr.filter((item) => !args.includes(item));
}

// input
// const arr: any[] = [1, 'a', 4, '4'];
// console.log(deleteValue(arr, 1, 4));

// output
// [ 'a', '4' ]
