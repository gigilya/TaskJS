// Напишите функцию, которая принимает массив в качестве входных данных и удаляет из него все "ложные значения"
// ( https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/Falsy )

let falseValue = (arr) => arr.filter(Boolean);

const testArray1 = [1, false, 2, "", 3, null, 0, undefined, NaN, 4];
falseValue(testArray1);