// Написать функцию, которая на вход принимает целое число и возвращает факториал этого числа

function factorial(integer: number) {
  let fact: number = 1;

  for (let i = 1; integer + 1 > i; i++) {
    fact *= i;
  }
  return fact;
}

const num: number = 4;

console.log(factorial(num));
