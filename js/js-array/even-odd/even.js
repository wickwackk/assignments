let input = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];

let even = 0;
let odd = 0;

for (let i = 0; i < input.length; i++) {
  input[i] % 2 == 0 ? even++ : odd++;
}
console.log(`Even:${even}`);
console.log(`Odd:${odd}`);
