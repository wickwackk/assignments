let a = 25;
let b = 40;
let c = 35;
let greatest;
let least;

if (a >= b && a >= c) {
  greatest = a;
} else if (b >= c) {
  greatest = b;
} else {
  greatest = c;
}

if (a <= b && a <= c) {
  least = a;
} else if (b <= c) {
  least = b;
} else {
  least = c;
}

if ((a == b) == c) {
  greatest = a;
  least = a;
}

console.log("hmgiin ih too n: " + greatest);
console.log("hmgiin baga too n: " + least);
