// Write a program that uses a loop to find and display the common elements between two arrays of integers.

// Steps:
// Step 1: Imagine you have two lists of numbers.
// Step 2: Pick a number from the first list.
// Step 3: Look at each number in the second list to see if it matches the number you picked.
// Step 4: If you find a match, it means the number is common to both lists.
// Step 5: Repeat steps 2-4 for each number in the first list.
// Step 6: Once you've checked all numbers in the first list, you've found all the common elements.
// Step 7: Display the common elements you found






let a=[1,2,3,4,5,];
let b=[1,6,7,8,9,];

for(let i = 0 ;i<a.length;i++){
    if(a[i] == b[i]){
        console.log("no match found in a and b",a);
    }
    else{
        console.log("Match not found") 
    }
}



