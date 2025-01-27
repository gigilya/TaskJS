// Написать функцию, которая осуществляет поиск и замену в предложении. Первый аргумент - это строка, в которой осуществляется поиск и замена.
// Второй аргумент - это слово, которое нужно заменить, третий аргумент - слово, на которое нужно заменить.
// При замене сохраняйте регистр первого символа в исходном слове.

function replacementWord(str: string, before: string, after: string): string {
  const firstCharUpper = /^[A-Z]/.test(before);
  if (firstCharUpper) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);
}
