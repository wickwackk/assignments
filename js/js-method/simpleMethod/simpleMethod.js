let array = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

array.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) return -1;
  if (a.toLowerCase() > b.toLowerCase()) return 1;
  return 0;
});

array.reverse();
array.shift();

array.splice(
  array.length % 2 == 0
    ? Math.floor(array.length / 2) - 1
    : Math.floor(array.length / 2),
  array.length % 2 == 0 ? 2 : 1
);

array.pop();
array.splice(0, array.length);

console.log(array);
