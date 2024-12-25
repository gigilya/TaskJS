// Написать функцию, которая на вход принимает целое число и возвращает факториал этого числа

function factorial(integer) {
  let fact = 1;
  let i = 1;

  for (; integer + 1 > i; i++) {
    fact *= i;    
  }
  return fact;
}

factorial(4);