let str = "This Is Where I Begin";

function parameterizeStr(str) {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].toLowerCase();
  }
  return str.join("-");
}

console.log(parameterizeStr(str));
