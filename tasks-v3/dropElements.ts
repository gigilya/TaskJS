// Написать функцию, которая принимает массив и функцию и удаляет каждый элемент массива начиная с первого, пока функция не вернет true,
// а затем возвращает оставшуюся часть массива. Например:
// dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) должна вернуть [3, 4].

function dropElements(arr: any[], func: (val: any) => boolean) {
  let i = 0;
  while (i < arr.length && !func(arr[i])) {
    i++;
  }
  return arr.slice(i);
}

console.log(dropElements([1, 2, 3, 4], (n: number) => n >= 3));  //[3, 4] 
console.log(dropElements(["a", "b", "b1"], (n: string) => n == 'b'));  //[3, 4] 
console.log(dropElements([1, 2, 1, 1, 1], (n: number) => n > 1));  //[2, 1, 1, 1] 