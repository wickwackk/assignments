let input = 5;
let output = "";
let n = 1;

for (let i = 1; i <= input; i++) {
  let arr = [];
  for (let y = input - i; y > 0; y--) {
    output += " ";
  }
  for (let j = 1; j <= i; j++) {
    arr[j - 1] = 1;
  }
  console.log(arr);
  output += arr.join(" ") + " ";
  output += "\n";
}
console.log(output);

/*
      1
     1 1
    1 2 1
   1 3 3 1
  1 4 6 4 1
 1 5 10 10 5 1
1 6 15 20 15 6 1
*/
