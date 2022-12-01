// #1

// #2
let month = 2;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31 honogtoi");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30 honogtoi");
    break;
  case 2:
    console.log("28 or 29");
    break;
  default:
    console.log("not a month");
}

//#3
let num = prompt();
if (num % 3 == 0 || num % 7 == 0) {
  alert("ene too 3 ymu 7iin urjver mun");
} else {
  alert("ene too 3 ymu 7iin urjver bish");
}

//#4
let num = prompt();
if (num < 0) {
  alert("negative");
} else {
  alert("positive");
}

//#5
let weight; //kg
let height; //m

let bmi = weight / Math.pow(height, 2);

if (bmi < 18.5) {
  console.log("Жингийн дутагдалтай");
} else if (bmi >= 18.5 && bmi <= 25.0) {
  console.log("Эрүүл");
} else if (bmi >= 25.0 && bmi <= 29.9) {
  console.log("Илүүдэл жинтэй");
} else {
  console.log("Хэт таргаллалттай");
}

//#6
let n;

if (n % 2 == 0) {
  console.log("tegsh");
} else {
  console.log("sondgoi");
}

//#7
let num;

if (num < 0) {
  console.log("surug");
} else {
  console.log("eyreg");
}

//#8
let yearOfBirth = Number(prompt("Tursun onoo oruulna uu:"));
let old = 2022 - yearOfBirth;

if (old >= 0 && old <= 1) {
  alert("Infant");
} else if (old > 1 && old <= 3) {
  alert("Toddler");
} else if (old > 3 && old <= 5) {
  alert("Preschool");
} else if (old > 5 && old <= 12) {
  alert("Gradeschooler");
} else if (old > 12 && old <= 18) {
  alert("Teen");
} else if (old > 18 && old <= 21) {
  alert("Young Adult");
} else {
  alert("Adult");
}
