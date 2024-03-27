// Write a program that uses a loop to check if a given number is prime or not.

// Steps :
// 1. We start with the given number num (assumed as 17).
// 2. We assume initially that the number is prime (isPrime is set to true).
// 3. We check if the number is less than 2, which is a special case for prime numbers. If it is, we set isPrime to false.
// 4. If the number is greater than or equal to 2, we loop from 2 up to the square root of the number.
// 5. In each iteration, we check if the current number divides the given number evenly (with no remainder). If it does, we set isPrime to false and break out of the loop.
// 6. After the loop, we display the result indicating whether the number is prime or not.



let number = 17;

for(let i = 1;i<=number;i++){
    if(number<2){
        console.log("no is not prime")
    }

    else(number/1==0 && number/i==0)
    {
          console.log(number*2);
    }
} 












