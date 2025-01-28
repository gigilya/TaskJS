// Написать функцию, которая принимает на вход массив из двух чисел и возвращает сумму этих двух чисел плюс сумму всех чисел между ними.
// Наименьшее число не всегда будет на первом месте. (Например sumAll([4, 1]) должен возвращать 10)

function sumLimit(arr: number[]): number {
  const [num1, num2] = arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumLimit([4, 1]));  //10
console.log(sumLimit([3, 10]));  //52
console.log(sumLimit([1, 1]));  //1

