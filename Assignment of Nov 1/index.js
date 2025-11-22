// Q no 1:

let score = Number(prompt("Enter your score:"));
if (score >= 90 && score <= 100) {
    console.log("Excellent");
}
else if (score >= 70 && score <= 89) {
    console.log("Good");
}
else if (score >= 50 && score <= 69) {
    console.log("Average");
}
else if (score >= 0 && score <= 49) {
    console.log("Fail");
 }
else{
    console.log("Invalid number");
}


// Q no 2:

// let day = prompt("Enter a Day:").toLowerCase();
// switch (day) {
//     case "monday":
//     case "tuesday":
//     case "wednesday":
//     case "thursday":
//     case "friday":
//         console.log("Weekday.");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Weekend.");
//         break;
//     default:
//         console.log("Invalid Day.");
// }
