
// Write a program that uses a loop to reverse and display the elements of an array.

// 1. We start with the given array [1, 2, 3, 4, 5].
// 2. We initialize an empty array "reversedArray" to store the reversed elements.
// 3. We loop through each element of the original array in reverse order using a for loop 
//4. starting from the last index (array.length - 1) down to 0.
// 5. Inside the loop, we add each element to the beginning of the "reversedArray" using the push() method.
// 6. After looping through all elements of the original array, we display the "reversedArray", which contains the elements of the original array in reverse order.
 let array=[1,2,3,4,5];
 let array1=[];
 for(let i= array.length -1; i>=0;i--){
array1.push(array[i]);

 }
console.log(array1)




















