let str = prompt("3n orontoi too oruulna uu: ");
let num = Number(str);
let result;

if (str.length == 3 && Number.isInteger(num)) {
  result = Number(str[0]) + Number(str[1]) + Number(str[2]);
  alert(result);
} else {
  alert("3n orontoi too bish bn.");
}
