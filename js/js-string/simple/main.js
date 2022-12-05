// #1

let fname = "Jamiyanpurev";
let lname = "Ochir";
if (fname.length > lname.length) {
  console.log(fname);
} else {
  console.log(lname);
}

// #2 #3

let char = "QWERqwer";

console.log(char.toUpperCase());
console.log(char.toLowerCase());

// #4

let first = "Pinecone academy- н";
let second = " leap хөтөлбөрт тавтай морилго уу? ";

console.log(first.concat(second));

// #5

let firstName = "Jamiyanpurev";
let lastName = "Ochir";
let country = "Mongol";
let city = "Ulaanbaatar";
let age = "22";
let job = "Oyutan";

console.log(
  "Namaig ".concat(
    lastName,
    " ovogtoi ",
    firstName,
    " gedeg.",
    " Bi ",
    country,
    " ulsiin ",
    city,
    " hotod amidardag. ",
    age,
    " nastai, ",
    job
  )
);

// #6

console.log("1 2 3 4 5\n 2 3 4 5 1\n 3 4 5 1 2\n 4 5 1 2 3\n 5 1 2 3 4");
