// Напишите функцию, которая на вход принимает массив и удаляет в нем все "ложные значения"
// ( https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/Falsy )

let falseValue = (arr: any[]) => arr.filter(Boolean);

const testArray1 = [1, false, 2, '', 3, null, 0, undefined, NaN, 4];

console.log(falseValue(testArray1));
