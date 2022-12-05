let input = prompt("Enter number of rows: ");
let str = "";
let i = 0;

while (i < input) {
  let j = 0;
  if (i == 0 || i == input - 1) {
    while (j < input) {
      str += "*";
      j++;
    }
  } else {
    while (j < input) {
      if (j == 0 || j == input - 1) {
        str += "*";
      } else {
        str += " ";
      }
      j++;
    }
  }

  str += "\n";
  i++;
}
console.log(str);
