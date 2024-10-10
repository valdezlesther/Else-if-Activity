let score = prompt("Enter your score:");

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 80 && score < 90) {
  console.log("Good");
} else if (score >= 70 && score < 80) {
  console.log("Fair");
} else {
  console.log("Needs Improvement");
}
