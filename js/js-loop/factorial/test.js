let num = 5;

function fac(x) {
  if (x == 0) {
    return 1;
  } else {
    return x * fac(x - 1);
  }
}

const result = fac(num);

console.log(result);
