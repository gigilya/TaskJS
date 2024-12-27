// Напишите функцию, которая принимает массив и целое число в качестве входных данных. Функция должна разделить массив
// (первый аргумент) на группы одинаковой длины (второй аргумент -увеличение) и возвращать их в виде двумерного массива

function matrix(arr: string[], len: number) {
  let chunkedArray: string[][] = [];
  for (let i = 0; i < arr.length; i += len) {
    chunkedArray.push(arr.slice(i, i + len));
  }
  return chunkedArray;
}
