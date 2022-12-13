let arr1 = [3, 45, 23, 78, 34];
let arr2 = [4, 2, 34, 4, 12, 1];
let output = [];

for (let i = 0; i < arr2.length; i++) {
  let temp = 0;
  temp = arr1[i] * arr2[i];
  output.push(temp);
  if (Number.isInteger(temp) == false) {
    output.pop();
  }
  if (arr1[i] == undefined) {
    output.push(arr2[i]);
  } else if (arr2[i] == undefined) {
    output.push(arr1[i]);
  }
}
console.log(output);
