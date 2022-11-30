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
let weight;
let height;
