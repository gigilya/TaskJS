// Напишите функцию, которая принимает строку в качестве входных данных и возвращает эту строку в формате:
// каждое слово начинается с заглавной буквы, остальные - со строчной

let titleString = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

titleString('мама папа');
