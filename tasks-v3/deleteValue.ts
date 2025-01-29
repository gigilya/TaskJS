// Написать функцию, которая на вход принимает массив и еще один или несколько аргументов (точное количество не известно).
// Удалить из массива все элементы, которые имеют то же значение, что и эти аргументы.

function deleteValue(arr: any[], ...args: any[]): any[] {
  return arr.filter((item) => !args.includes(item));
}

console.log(deleteValue([1, 2, 3, 4], 4, 3, 2, 1));  //[]
console.log(deleteValue(["a" , "b", "b1"], "b"));  //["a", "b1"] 
console.log(deleteValue([1, 1, 1, 1, 1], 2));  //[1, 1, 1, 1, 1]
