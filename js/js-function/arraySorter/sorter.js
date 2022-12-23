let input = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];

function arraySorter(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}

console.log(arraySorter(input));
