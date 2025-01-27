// Написать функцию, которая конвертирует строку в spinal-case регистр.

function spinalCase(str: string): string {
  if (typeof str !== "string") {
    throw new Error("Аргумент должен быть строкой.");
  }
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/\s+|_+/g, "-");
}
