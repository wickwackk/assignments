let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
let sum = 0;

for (let i = 0; i < arrayOfNumbers.length; i++) {
  sum += arrayOfNumbers[i];
}
console.log("Sum is: " + sum);

console.log("Hmgin ih utga: " + Math.max(...arrayOfNumbers));
console.log("Hmgin baga utga: " + Math.min(...arrayOfNumbers));

console.log("Origooro:\t" + " \t\t\t\t\t" + arrayOfNumbers.join(", "));
arrayOfNumbers.unshift(13);
console.log("Urd n too nemeed:\t" + " \t" + arrayOfNumbers.join(", "));

arrayOfNumbers.push(39);
console.log("Ard n too nemeed:\t" + " \t" + arrayOfNumbers.join(", "));
