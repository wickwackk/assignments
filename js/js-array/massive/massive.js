let arr1 = [3, 45, 23, 78, 34];
let arr2 = [4, 2, 34, 4, 12, 1];
let output = [];

for (let i = 0; i < arr1.length; i++) {
  let temp = 0;
  for (let j = 0; j < arr2.length; j++) {
    if (i == j) {
      temp = arr1[i] * arr2[j];
      output.push(temp);
    } else if (arr1[j] == undefined) {
      output.push(arr[j]);
    } else if (arr2[i] == undefined) {
      temp = arr1[i];
      output.push(temp);
    }
  }
}
console.log(output);
