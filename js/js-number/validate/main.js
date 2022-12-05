let phoneNumber = prompt("Utasnii dugara oruulna uu: ");
let convert = Number(phoneNumber);

if (
  Number.isInteger(convert) &&
  phoneNumber.length == 12 &&
  phoneNumber.substring(0, 4) == "+976"
) {
  console.log("Mongol ulsiin utasnii dugaarig zuv oruulla");
} else {
  console.log("Mongol ulsiin utasnii dugaarig buruu oruulla");
}
