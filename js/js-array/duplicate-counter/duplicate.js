let input = "12341";
let splt = input.split("");

for (let i = 0; i < 10; i++) {
  let count = 0;
  for (let j = 0; j < splt.length; j++) {
    if (splt[j] == i + "") count += 1;
  }
  console.log(i + ": " + count);
}
