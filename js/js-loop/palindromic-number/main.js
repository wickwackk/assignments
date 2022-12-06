let num = prompt("Enter a Palindrome number:");
let count = 0;

for (let i = 0; i < num.length; i++) {
  if (num[i] == num[num.length - i - 1]) {
    count += 1;
  }
}
if (count == num.length) {
  alert("true");
} else {
  alert("false");
}
