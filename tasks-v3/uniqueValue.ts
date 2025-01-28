// Написать функцию, которая принимает два или более массивов и возвращает новый массив уникальных значений.
// Значения должны быть отсортированы по их первоначальному порядку.

function uniqueValue(...arrs: any[]): any[] {
  const combined: any[] = [];
  arrs.forEach((arr) => {
    arr.forEach((item) => {
      if (!combined.includes(item)) {
        combined.push(item);
      }
    });
  });
  return combined;
}

console.log(uniqueValue([1, 2]));  //[1, 2] 
console.log(uniqueValue([1, 3], [4, 3])); //[1, 3, 4]
console.log(uniqueValue([1, 2], [6]));  //[1, 2, 6]
