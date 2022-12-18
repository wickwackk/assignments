let a = 5;
let b = 15;

function even(a, b) {
  let arr = [];
  if (a > b) {
    for (let i = b; i <= a; i++) {
      if (i % 2 == 0) {
        arr.push(i);
      }
    }
  } else {
    for (let i = a; i <= b; i++) {
      if (i % 2 == 0) {
        arr.push(i);
      }
    }
  }
  return arr;
}

function odd(a, b) {
  let arr = [];
  if (a > b) {
    for (let i = b; i <= a; i++) {
      if (i % 2 == 1) {
        arr.push(i);
      }
    }
  } else {
    for (let i = a; i <= b; i++) {
      if (i % 2 == 1) {
        arr.push(i);
      }
    }
  }
  return arr;
}

console.log(odd(a, b));
