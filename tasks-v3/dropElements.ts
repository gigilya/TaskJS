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

// input
// const arr: any[] = [1, 2, 3, 4];
// const func = (n: number) => n >= 3;
// console.log(dropElements(arr, func));

// output
// [ 3, 4 ]
