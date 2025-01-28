// Написать функцию, которая конвертирует строку в spinal-case регистр.

function spinalCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/\s+|_+/g, "-");
}

console.log(spinalCase("Hello hello"));  //"hello-hello" 
console.log(spinalCase("HELLO 12 worD"));  //"hello-12-wor-d"
console.log(spinalCase("he ll o"));  //"he-ll-o"
