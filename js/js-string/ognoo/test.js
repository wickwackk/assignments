let phoneNumber = prompt("Utasnii dugaaraa oruulna uu:");
let convert = Number(phoneNumber);

if (Number.isInteger(convert) && phoneNumber.length == 8) {
  switch (phoneNumber.substring(0, 2)) {
    case "99":
    case "95":
    case "94":
      alert("Mobicom");
      break;
    case "98":
      alert("G-Mobile");
      break;
    case "88":
    case "85":
    case "80":
    case "86":
    case "89":
      alert("Unitel");
      break;
    case "96":
    case "91":
    case "90":
      alert("Skytel");
    case "77":
      alert("Geriin utas");
    default:
      alert("tim dugaar alga");
  }
} else {
  alert("Utasnii dugaar bish bn");
}
