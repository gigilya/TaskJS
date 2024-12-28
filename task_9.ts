// Напишите функцию, которая на вход принимает массив и целое число. Функция должна разбить массив
// (первый аргумент) на группы длинной size (второй аргумент) и вернуть их в виде двумерного массива

function matrix(arr: string[], len: number) {
  let chunkedArray: string[][] = [];
  for (let i = 0; i < arr.length; i += len) {
    chunkedArray.push(arr.slice(i, i + len));
  }
  return chunkedArray;
}
