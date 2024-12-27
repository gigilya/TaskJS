//Написать функцию, которая на вход принимает строку и возвращает длину самого длинного слова в этой строке

function maxWord(inputString: string) {
  const words: string[] = inputString.split(' ');
  let maxLength: number = 0;

  for (const word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}

const lineString: string = 'Hello world';

console.log(maxWord(lineString));
