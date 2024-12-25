//Написать функцию, которая на вход принимает строку и возвращает длину самого длинного слова в этой строке

function maxWord(inputString) {
  const words = inputString.split(' ');
  let maxLength = 0;

  for (const word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}

max('Hello world');