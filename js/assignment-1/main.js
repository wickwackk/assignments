//#1
//#2
//#3
let myAge = prompt("Minii nas");
let yourAge = prompt("Ta nasaa oruulna uu: ");

if (myAge > yourAge) {
  console.log("bi hugshin");
} else {
  console.log("ta hugshin");
}

//#4
let day = Number(prompt("Heddeh udur ve: "));
if (day == 1 || day == 2 || day == 3 || day == 4 || day == 5) {
  console.log("Ajiliin udur");
} else if (day == 6 || day == 7) {
  console.log("Amraltiin udur");
} else {
  console.log("Tim udur alga");
}

//#5
let hours = 40;
let ratePerHour = 28;

let tsalin = hours * ratePerHour;

console.log("Tanii tsalin " + tsalin);
