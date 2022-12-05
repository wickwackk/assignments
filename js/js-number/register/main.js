let register = "СЦ90091817";
let lasteight = register.substring(2, 10);

if (
  register.length == 10 &&
  register.charCodeAt(0) > 57 &&
  register.charCodeAt(1) > 57 &&
  Number.isInteger(Number(lasteight))
) {
  console.log("та монгол улсын регистрийн дугаарыг зөв орууллаа");
} else {
  console.log("та монгол улсын иргэний бүртгэлийн дугаарыг буруу орууллаа");
}
