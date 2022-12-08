// #1

let input = 5;
let str = "";

for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= i; j++) {
    str += j + " ";
  }
  str += "\n";
}
console.log(str);

// #2

let input = 5;
let str = "";

for (let i = 1; i <= input; i++) {
  for (let j = 5; j >= i; j--) {
    str += j + " ";
  }
  str += "\n";
}
console.log(str);
