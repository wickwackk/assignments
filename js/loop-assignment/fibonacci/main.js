let count = prompt("fibonacci series length:");
let a = 1,
  b = 1,
  c;
let n = 0;
let str = "";
while (n < count) {
  str += a + " ";
  c = a + b;
  a = b;
  b = c;
  n++;
}
alert(str);
