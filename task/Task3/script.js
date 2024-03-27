// check if a number is an even or odd. then the following conditions must be satisfied.
//      a) "given Number is Even and to print double of the number"
//      b) "given Number is odd and to print adding by two"           
//  Steps :
// Let the given number be N.
// Check if N is divisible by 2.
// If N is divisible by 2 (i.e., N % 2 equals 0), then it's even.
// Print "The given number is even."
// Print "Double of the number is: " followed by 2 times N.
// If N is not divisible by 2 (i.e., N % 2 is not equal to 0), then it's odd.
// Print "The given number is odd."
// Print "Adding 2 to the number results in: " followed by N + 2.
let n = 2;
if (n % 2 == 0) {
    console.log('The given number is even.');
    console.log('Double of the number is: ' + (n * 2));
} else {
    console.log('The given number is odd.');
    console.log('Adding 2 to the number results in: ' + (n + 2))
}
