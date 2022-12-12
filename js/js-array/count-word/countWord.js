let data = [
  "Засгийн",
  "газарт",
  "6.4",
  "сая",
  "тонн",
  "нүүрс",
  "алдагдсан",
  "гэх",
  "мэдээлэл",
  "ирээгүй",
  "байна.",
  "Бодит",
  "байдалд",
  "ийм",
  "их",
  "хэмжээний",
  "нүүрс",
  "алдагдсан",
  "гэх",
  "асуудал",
  "эргэлзээтэй",
  "байна.",
  "Хууль",
  "хяналтын",
  "байгууллага",
  "хяналт",
  "шалгалтын",
  "ажил",
  "явуулж",
  "байна",
  "засгийн",
];
let input = "Засгийн";
let result = input.toLowerCase();
let count = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i].toLocaleLowerCase() == result) {
    count += 1;
  }
}
console.log(input + " гэдэг үг " + count + " орсон байна.");
