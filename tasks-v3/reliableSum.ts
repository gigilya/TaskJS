// Написать функцию, которая суммирует два аргумента вместе. Если указан только один аргумент, то возвращает функцию,
// которая ожидает второй аргумент и возвращает сумму.

function reliableSum(a: number, b?: number): number | ((b: number) => number) {
  if (b === undefined) {
    return (c: number) => {
      return a + c;
    };
  }
  return a + b;
}

console.log(reliableSum(1, 2));  //3
console.log(reliableSum(5));  //(c) => {return a + c;} 
console.log(reliableSum(4, 4));  //8
