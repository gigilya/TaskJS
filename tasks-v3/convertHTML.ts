// Написать функцию, которая заменяет символы &, <, >, "(двойные кавычки), и ‘(апостроф) в строке их соответствующим HTML - кодом.
function convertHTML(str: string): string {
  const htmlEntities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str.replace(/[&<>"']/g, (char) => htmlEntities[char]);
}

// input
// const str: string = "<>";
// console.log(convertHTML(str))

// output
// &lt;&gt;
