// Написать функцию, которая суммирует все простые числа до n (аргумент функции)

function sumRange(num: number): number {
  const isPrime = (n: number) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return n > 1;
  };
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

// input
// const num: number = 4;
// console.log(sumRange(num));

// output
// 5
