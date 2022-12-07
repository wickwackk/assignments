// #1

let i = 1;
let str = "";

while (i <= 10) {
  str += i + " ";
  i++;
}
console.log(str);

// #2

let i = 1;
let str = "";

while (i <= 10) {
  if (i % 2 == 1) {
    str += i + " ";
  }
  i++;
}
console.log(str);

// #3

let i = 1;
let str = "";

while (i <= 10) {
  if (i % 2 == 0) {
    str += i + " ";
  }
  i++;
}
console.log(str);

// #4

let i = 1;
let sum = 0;

while (i <= 100) {
  sum += i;
  i++;
}
console.log(sum);

// #5

let input = 10;
let i = 1;
let str = "";
let sum = 0;

while (i <= input) {
  str += i + " ";
  sum += i;
  i++;
}
console.log(str + "toonuudin niilber: " + sum);

// #6

let input = 11;
let i = 2;
let prime = "prime";

while (i < input) {
  if (input % i == 0) prime = "prime bish";
  i++;
}
if (prime == "prime") {
  console.log(prime);
} else {
  console.log(prime);
}

// #7

let i = Number(prompt());
let j = Number(prompt());
let str = "";

while (i <= j) {
  let y = 2;
  let prime = true;
  while (y < i) {
    if (i % y == 0) {
      prime = false;
      break;
    }
    y++;
  }
  if (prime == true) {
    str += i + " ";
  }
  i++;
}
console.log(str);

// #8

let input = Number(prompt("Hediin factorial harmar bn: "));
let i = 1;
let factorial = 1;

while (i <= input) {
  factorial *= i;
  i++;
}
console.log(factorial);

// #9

let input = Number(prompt("ymr tooni tsifruudin niilber oluulah ve: "));
let i = 0;
let digit,
  sum = 0;

while (input > 0) {
  digit = input % 10;
  sum += digit;
  input = Math.floor(input / 10);
  i++;
}
alert(sum);

// #10

let input = Number(prompt());
let i = 1;
let sum = 0;
let str = "";

while (i <= input) {
  if (i % 2 == 1) {
    str += i + " ";
    sum += i;
  }
  i++;
}
console.log(str);
console.log("Niilber n: " + sum);

// #11

let input = Number(prompt());
let i = 1;
let sum = 0;
let str = "";

while (i <= input) {
  if (i % 2 == 0) {
    str += i + " ";
    sum += i;
  }
  i++;
}
console.log(str);
console.log("Niilber n: " + sum);

// #12

let input = Number(prompt("urvuulah toogo oruulna uu: "));
let i = 0;
let last;
let str = "";

if (input > 0) {
  while (input > 0) {
    last = input % 10;
    str += last;
    input = Math.floor(input / 10);
  }
  console.log(str);
} else console.log("eyreg too oruul");

// #13

let n = 2342345;
let i = 0;
let str = "";

let temp = n;

while (temp > 0) {
  temp = Math.floor(temp / 10);
  i++;
}
let k = i - 1;
while (k >= 0) {
  digit = Math.floor(n / Math.pow(10, k));
  switch (digit) {
    case 1:
      str += "neg ";
      break;
    case 2:
      str += "hoyr ";
      break;
    case 3:
      str += "gurav ";
      break;
    case 4:
      str += "duruv ";
      break;
    case 5:
      str += "tav ";
      break;
    case 6:
      str += "zurgaa ";
      break;
    case 7:
      str += "doloo ";
      break;
    case 8:
      str += "naim ";
      break;
    case 9:
      str += "yus ";
      break;
  }
  n = n - digit * Math.pow(10, k);
  k--;
}

console.log(str);
