let randomNumber = Math.floor(Math.random() * 100) + 1;

while (true) {
  let guess = Number(prompt("too oruul"));
  if (guess == randomNumber) {
    alert("taalaa");
    break;
  } else if (guess > randomNumber) {
    alert("taasan too chn ih bn");
  } else {
    alert("taasan too chn baga bn");
  }
}
