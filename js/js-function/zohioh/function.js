function findGreat(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}

console.log(findGreat(5, 8));

let arr = [3, 5, 7, 9];

function included(a, array) {
  if (array.includes(a)) {
    return array.indexOf(a);
  } else {
    return -1;
  }
}

console.log(included(2, arr));

function getRandomNum(a, b) {
  return Math.floor(Math.random() * b + a);
}

console.log(getRandomNum(1, 3));
