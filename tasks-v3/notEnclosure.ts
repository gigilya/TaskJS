// Написать функцию, которая принимает массив различной вложенности и возвращает одномерный массив. Например:
// steamrollArray([1, [2], [3, [[4]]]]) должна вернуть [1, 2, 3, 4].

function notEnclosure(arr: any[]): any[] {
  const flattenedArray: any[] = [];
  function flatten(item: any) {
    if (Array.isArray(item)) {
      item.forEach(flatten);
    } else {
      flattenedArray.push(item);
    }
  }
  arr.forEach(flatten);
  return flattenedArray;
}
