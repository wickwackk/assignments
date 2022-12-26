let carBrands = [
  ["Aston Martin Lagonda Ltd", "UK", 2016],
  ["Audi", "Germany", 2016],
  ["BMW", "Germany", 2016],
  ["Chevrolet", "USA", 2016],
  ["Dodge", "USA", 2016],
  ["Ferrari", "Italy", 2016],
  ["Honda", "Japan", 2016],
  ["Jaguar", "UK", 2016],
  ["Lamborghini", "Italy", 2016],
];

// let input = "a";
// let boolean = false;
// for (let i = 0; i < carBrands.length; i++) {
//   if (
//     carBrands[i][0][0] == input.toLowerCase() ||
//     carBrands[i][0][0] == input.toUpperCase()
//   ) {
//     console.log(
//       `brand: ${carBrands[i][0]}\ncountry: ${carBrands[i][1]}\nyear: ${carBrands[i][2]}\n`
//     );
//     boolean = true;
//   }
// }
// if (boolean == false) console.log("олдсонгүй");

// let input = "USA";

// for (let i = 0; i < carBrands.length; i++) {
//   if (carBrands[i][1].toLowerCase() == input.toLowerCase()) {
//     console.log(`${carBrands[i][0]}, ${carBrands[i][1]}, ${carBrands[i][2]}`);
//   }
// }

let count = 0;
let str = "";

for (let i = 0; i < carBrands.length; i++) {
  count++;
  let count1 = 1;
  let temp = carBrands[i][1];
  for (let j = 0; j < carBrands.length; j++) {
    if (j != i && carBrands[i][1] == carBrands[j][1]) {
      count1++;
    }
  }
  str += str.includes(carBrands[i][1]) ? "" : `, ${carBrands[i][1]}-${count1}`;
}

let str1 = count + "";

console.log(`Нийт ${count} мөр дата`.concat(str));
