let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompanies.slice(0, 3));

console.log(itCompanies.slice(-3));

for (let i = 0; i < itCompanies.length; i++) {
  if (i == Math.floor(itCompanies.length / 2)) {
    console.log(itCompanies.slice(i, i + 1));
  }
}

itCompanies.shift();
console.log(itCompanies);

itCompanies.pop();
console.log(itCompanies);
