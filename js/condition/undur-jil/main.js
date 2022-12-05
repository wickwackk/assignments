let jil = prompt("Hussen jilee oruulna uu");

if (jil % 4 == 0 && jil % 100 == 0 && jil % 400 != 0) {
  alert("undur jil bish");
} else if (jil % 4 == 0) {
  alert("undur jil mun");
} else {
  alert("undur jil bish");
}
