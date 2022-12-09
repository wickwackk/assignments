let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompanies);

for (let i = 0; i < itCompanies.length; i++) {
  let count = 0;
  for (j = 0; j < itCompanies[i].length; j++) {
    count += 1;
  }
  console.log(itCompanies[i] + ": " + count);
}

for (let i = 0; i < itCompanies.length; i++) {
  if (i == 0) {
    console.log("Ehnii company: " + itCompanies[i]);
  } else if (i == itCompanies.length - 1) {
    console.log("Suulchiin company: " + itCompanies[i]);
  } else if (i == Math.floor(itCompanies.length / 2)) {
    console.log("Dund taliin company: " + itCompanies[i]);
  }
}

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

for (let i = 0; i < itCompanies.length; i++) {
  let j = 0;
  console.log(itCompanies[i][j]);
}

console.log(
  itCompanies.join(", ") + " зэрэг мэдээллийн технологийн томоохон компаниуд."
);
