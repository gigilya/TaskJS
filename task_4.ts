// Напишите функцию, которая на вход принимает строку и целое число и обрезает строку (первый аргумент),
// если она длиннее заданной максимальной длины строки (второй аргумент) и возвращает обрезпнную строку с "..." в конце

function sliceLine(line: string, maxLine: number) {
  if (line.length >= maxLine) {
    return `${line.slice(0, maxLine)}...`;
  }
  return line;
}

const stringLine: string = 'vervion';
const max: number = 3;

console.log(sliceLine(stringLine, max));
