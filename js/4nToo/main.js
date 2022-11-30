let a = 120,
  b = 33,
  c = 10,
  d = 12;
let least;
if (a <= b && a <= c && a <= d) {
  least = a;
} else if (b <= c && b <= d) {
  least = b;
} else if (c <= d) {
  least = c;
} else {
  least = d;
}
console.log(least);
