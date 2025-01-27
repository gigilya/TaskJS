// Написать функцию, которая принимает массив и функцию и удаляет каждый элемент массива начиная с первого, пока функция не вернет true,
// а затем возвращает оставшуюся часть массива. Например:
// dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) должна вернуть [3, 4].

function dropElements(arr: any[]): any[] {
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
