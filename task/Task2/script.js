// Whenever the percentage is Entered, then the following conditions must be satisfied.
//       a) Percentage between 40 to 50 => To print "Buy a pen."
//       b) Percentage between 50 to 60 => To print "Buy a Book."
//       c) Percentage between 60 to 70 => To print "Buy a Bag."
//       d) Percentage between 70 to 80 => To print "Buy a Watch."
//       e) Percentage between 80 to 90 => To print "Buy a Mobile."
//       f) Percentage between 90 to 100 => To print "Buy an Laptop."
//       g) otherwise => To print "Fail"
let percentage = 39;
if (percentage >= 40 && percentage <= 50) {
    console.log("Buy a pen");
}
else if (percentage >= 50 && percentage <= 60) {
    console.log("Buy a Book")
}
else if (percentage >= 60 && percentage <= 70) {
    console.log("Buy a Bag ")
}
else if (percentage >= 70 && percentage <= 80) {
    console.log("Buy a watch ")
}
else if (percentage >= 80 && percentage <= 90) {
    console.log("Buy a mobile ")
}
else if (percentage >= 90 && percentage <= 100) {
    console.log("Buy a laptop ")
}
else {
    console.log("Fail");
}

// switch (percentage) {
//     case (percentage >= 40 && percentage <= 50):
//         console.log("Buy a pen");
//         break;
//     case (percentage >= 50 && percentage <= 60):
//         console.log("Buy a Book");
//         break;
//     default:
//         console.log("Fail");
//         break;
// }

