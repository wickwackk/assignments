/* let aTeamAvg = 88;
let bTeamAvg = 90; */
let aTeamAvg = (96 + 108 + 89) / 3;
let bTeamAvg = (88 + 91 + 110) / 3;
if (aTeamAvg > bTeamAvg && aTeamAvg >= 100) {
  console.log("A team wins");
} else if (bTeamAvg > aTeamAvg && bTeamAvg >= 100) {
  console.log("B team wins");
} else if (aTeamAvg == bTeamAvg && aTeamAvg >= 100) {
  console.log("Baguud tentssen");
} else {
  console.log("ylagch baihgui");
}
