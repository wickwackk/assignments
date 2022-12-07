let n = Number(prompt("100 aas baga too oruulna uu"));
let count = 0;

if (n < 100) {
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      alert("false");
      break;
    } else {
      count += 1;
    }
  }
  if (count == n - 2) {
    alert("true");
  }
} else {
  alert("100 aas ih bn");
}
