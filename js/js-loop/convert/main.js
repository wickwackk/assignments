let input = "This Is STRING";
let str = "";

for (let i = 0; i < input.length; i++) {
  if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
    str += input[i].toLowerCase();
  } else if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) {
    str += input[i].toUpperCase();
  } else {
    str += input[i];
  }
}
console.log(str);
