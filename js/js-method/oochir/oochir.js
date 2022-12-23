let queueLine = [
  "Бат",
  "Дорж",
  "Пунцаг",
  "Готов",
  "Баяраа",
  "Болд",
  "Навчаа",
  "Гончигсумлай",
  "Цэцгээ",
  "Нэргүй",
  "Бальбийгомбо",
  "Баатар",
];

queueLine.splice(queueLine.indexOf("Гончигсумлай") + 1, 0, "egch1", "egch2");

queueLine.splice(10, queueLine.length);

console.log(queueLine);
