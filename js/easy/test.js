let yearOfBirth = Number(prompt("Tursun onoo oruulna uu:"));
let old = 2022 - yearOfBirth;

if (old >= 0 && old <= 1) {
  alert("Infant");
} else if (old > 1 && old <= 3) {
  alert("Toddler");
} else if (old > 3 && old <= 5) {
  alert("Preschool");
} else if (old > 5 && old <= 12) {
  alert("Gradeschooler");
} else if (old > 12 && old <= 18) {
  alert("Teen");
} else if (old > 18 && old <= 21) {
  alert("Young Adult");
} else {
  alert("Adult");
}
