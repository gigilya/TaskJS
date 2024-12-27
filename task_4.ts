// Напишите функцию, которая принимает строку и целое число в качестве входных данных и обрезает строку (первый аргумент),
// если она длиннее указанного максимального значения определяет длину строки (второй аргумент) и возвращает усеченную строку с "..." в конце

function sliceLine(line: string, maxLine: number) {
  if (line.length >= maxLine) {
    return line.slice(0, maxLine) + "...";
  }
  return line;
}

const stringLine: string = 'vervion';
const max: number = 3;

console.log(sliceLine('12345', 3));
