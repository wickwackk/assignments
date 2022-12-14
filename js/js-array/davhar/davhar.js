let input = [4, 2, 34, 4, 4, 4, 4, 1, 12, 1, 1, 4, 1, 1, 4, 1, 1, 4];
let hooson = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (i < j && input[i] == input[j] && !hooson.includes(input[i])) {
      hooson.push(input[i]);
    }
  }
}
console.log(hooson);
