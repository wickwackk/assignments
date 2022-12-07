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
