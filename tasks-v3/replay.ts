// Создайте функцию, которая просматривает массив объектов (первый аргумент) и возвращает массив всех объектов,
// имеющих совпадающие пары имя и значение (второй аргумент). Например:
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })
// должен вернуться [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]

function replay(
  collection: Record<string, any>[],
  source: Record<string, any>
) {
  return collection.filter((obj) =>
    Object.keys(source).every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );
}

const collection = [
  { apple: 1, bat: 2 },
  { apple: 1 },
  { apple: 1, bat: 2, cookie: 2 },
  { bat: 2 },
];
const collection1 = [
  { apple: 2, bat: 2 },
  { apple: 2 },
  { apple: 1, bat: 2, cookie: 2 },
  { bat: 2 },
];

const source = { apple: 1, bat: 2 };
const source1 = { apple: 2, bat: 2 };

console.log(replay(collection, source));  
// [{
//   "apple": 1,
//   "bat": 2
// }, {
//   "apple": 1,
//   "bat": 2,
//   "cookie": 2
// }] 

console.log(replay(collection1, source1));
// [{
//   "apple": 2,
//   "bat": 2
// }]
