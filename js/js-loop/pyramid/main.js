let str = "";
let input = 10;
let i = 0;

while (i < input) {
  let j = 0;
  let space = input;
  while (space - 1 > i) {
    str += " ";
    space--;
  }
  while (j <= i * 2) {
    str += "*";
    j++;
  }
  str += "\n";
  i++;
}
console.log(str);

/*
---*
--***
-*****
*******
*/
