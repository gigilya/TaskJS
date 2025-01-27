// Создайте функцию, которая просматривает массив объектов (первый аргумент) и возвращает массив всех объектов,
// имеющих совпадающие пары имя и значение (второй аргумент). Например:
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })
// должен вернуться [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]

function replay(
  collection: Record<string, any>[],
  source: Record<string, any>
): Record<string, any>[] {
  if (
    !Array.isArray(collection) ||
    typeof source !== "object" ||
    source === null
  ) {
    throw new Error("Неправильные типы аргументов.");
  }
  return collection.filter((obj) =>
    Object.keys(source).every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );
}
