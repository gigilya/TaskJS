// Написать функцию, которая суммирует все простые числа до n (аргумент функции)

function sumRange(n: number) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
      sum += i;
  }
  return sum;
};

console.log(sumRange(2));  //2
console.log(sumRange(10));  //55
console.log(sumRange(1));  //1
