// function findGreat(a, b) {
//   if (a >= b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(findGreat(5, 8));

// let arr = [3, 5, 7, 9];

// function included(a, array) {
//   if (array.includes(a)) {
//     return array.indexOf(a);
//   } else {
//     return -1;
//   }
// }

// function charIncluded(c, array) {
//   if (array.includes(c)) {
//     return array.indexOf(c);
//   } else {
//     return -1;
//   }
// }

// console.log(included(2, arr));

// function getRandomNum(a, b) {
//   return Math.floor(Math.random() * b + a);
// }

// console.log(getRandomNum(1, 3));

// let arr = [2, 4, 5, 7, 3, 2, 4];

// function avgofArray(array) {
//   return array[Math.floor(array.length / 2)];
// }

// console.log(avgofArray(arr));

// function sumOfArray(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// console.log(sumOfArray(arr));

// function primeNumber(n) {
//   let tr = true;
//   for (i = 2; i < n; i++) {
//     if (n % i == 0) {
//       tr = false;
//       break;
//     } else {
//       tr = true;
//     }
//   }
//   if (tr == true) {
//     return "prime";
//   } else {
//     return "not prime";
//   }
// }
// console.log(primeNumber(17));

function allUpperCase(str) {
  return str.toUpperCase();
}

function allLowerCase(str) {
  return str.toLowerCase();
}

console.log(allLowerCase("QWERTY"));
