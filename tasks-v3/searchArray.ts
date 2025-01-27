// Написать функцию, которая на вход принимает два массива и возвращает новый массив
// с элементами найденными только в одном массиве, но не в обоих.

function searchArray(arr1: any[], arr2: any[]): any[] {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("Оба аргумента должны быть массивами.");
  }
  const combined = [...arr1, ...arr2];
  return combined.filter(
    (item) => !arr1.includes(item) || !arr2.includes(item)
  );
}
