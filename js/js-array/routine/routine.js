let activities = [
  ["ajil", 10],
  ["ideh", 1],
  ["yriltsah", 2],
  ["togloh", 3],
  ["untah", 8],
];
let newArray2 = [];

for (let i = 0; i < activities.length; i++) {
  let newArray = [];

  let huvi = 0;
  let ner;
  huvi = (activities[i][1] / 0.24).toFixed(1) + "%";
  ner = activities[i][0];
  newArray.push(ner);
  newArray.push(huvi);
  newArray2.push(newArray);
}
console.table(activities);
activities = activities.concat(newArray2);

console.table(activities);
