// Написать функцию, которая принимает два или более массивов и возвращает новый массив уникальных значений.
// Значения должны быть отсортированы по их первоначальному порядку.

function uniqueValue(...arrs: any[][]): any[] {
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
