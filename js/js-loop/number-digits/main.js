let input = Number(prompt());
let count = 0;

while (input > 0) {
  input = Math.floor(input / 10);
  count += 1;
}
alert("digit: " + count);
