// Напишите функцию, которая на вход принимает строку и возвращает эту строку в формате:
// каждое слово начинается с заглавной буквы, остальные в нижнем регистре

let titleString = (str: string) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const line: string = 'мама папа';

console.log(titleString(line));
