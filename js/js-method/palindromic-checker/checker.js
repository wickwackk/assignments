function checker(str) {
  let str1 = str.split("");
  let str2 = [...str1].reverse();

  if (str1.join("") == str2.join("")) {
    return "Palindromic";
  } else {
    return "not palindromic";
  }
}

let input = "1234321";

console.log(checker(input));
