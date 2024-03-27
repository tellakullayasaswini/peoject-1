// To exchange the values of two numbers without using Third variable and after exchange then Double of the values of two numbers.

// Steps : 
// 1. Let A and B be the two numbers.
// 2. Add B to A.
// 3. Subtract original value of B from the updated A.
// 4. Subtract the updated value of B from A.
// 5. Now, A contains the original value of B, and B contains the original value of A.
// 6. Double the value of A.
// 7. Double the value of B.
let a = 10;
let b = 20;
a = b + a;
b = a - b;
a = a - b;
console.log(a);
console.log(b);
console.log(a * 2);
console.log(b * 2);
