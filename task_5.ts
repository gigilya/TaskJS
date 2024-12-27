// Напишите функцию, которая принимает строку в качестве входных данных и возвращает эту строку в формате:
// каждое слово начинается с заглавной буквы, остальные - со строчной

let titleString = (str: string) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const line: string = 'мама папа';

console.log(titleString(line));
