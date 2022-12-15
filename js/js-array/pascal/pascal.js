let input = 7;
let output = "";
let n = 1;
let arr1 = [];

for (let i = 1; i <= input; i++) {
  for (let y = input - i; y > 0; y--) {
    output += " ";
  }
  let arr = [];
  for (let j = 0; j < i; j++) {
    arr[0] = 1;
    if (j == i - 1) {
      arr[j] = 1;
    }
    if (j != 0 && j < i - 1) {
      arr[j] = arr1[j - 1] + arr1[j];
    }
  }
  arr1 = arr;
  console.log(arr1);
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
