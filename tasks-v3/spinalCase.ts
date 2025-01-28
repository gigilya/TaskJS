// Написать функцию, которая конвертирует строку в spinal-case регистр.

function spinalCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/\s+|_+/g, "-");
}

// input
// const str: string = "string STRING";
// console.log(spinalCase(str));

// output
// string-string
