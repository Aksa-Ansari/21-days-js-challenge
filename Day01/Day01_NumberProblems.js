//  Note:
//  I used num1, num2, num3... etc. to avoid variable name conflicts 
//  while testing multiple solutions in the same file 😊

// 1: Print numbers from 1 to N
let num1 = 5;
for(let i=1; i<=num1; i++){
    console.log(i);
}

// 2: Print Numbers from N to 1 without changing the loop condition of above question
let num2 =5;
for(let i=1; i<=num2; i++){
    console.log(num2-i+1);
}

// 3: Print All Even Numbers from 1 to N
const num3 = 10;
for(let i= 1; i<=num3; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// 4: Sum of First N Natural Numbers
let num4 =5;
let sum=0;

for(let i=1; i<=num4; i++){
    sum =sum+i;
}
console.log("Sum of N Natural Numbers is", sum);

// 5: Product (Factorial) of N
let num5 = 5;
let fact =1;
for(let i=1; i<=num5; i++){
    fact = fact*i;
}
console.log("Factorial of", num5, "is:", fact);

// 6: Sum of All Even Numbers up to N
let num6 = 10;
let sumOfEven = 0;
for(let i=1; i<=num6; i++){
    if(i%2===0){
        sumOfEven=sumOfEven+i;
    }
}
console.log("Sum of even numbers up to", num6, "is:", sumOfEven);

// 7: Print Squares of Numbers from 1 to N
const num7 = 5;
for(let i=1; i<=num7; i++){
    console.log(i*i);
}


//  Extra Practice Challenge

// 1: Print numbers divisible by 3 and 5 up to N
let num8 = 20;
for(let i=1; i<=num8; i++){
    if(i%3===0 && i%5===0){
        console.log(i);
    }
}

// 2: Find the sum of all odd numbers up to N
let num9 = 10;
let sumOfOdd =0;
for(let i=1; i<=num9; i++){
    if(i % 2 !== 0 ){
       sumOfOdd =sumOfOdd+i;
    }
}
console.log("Sum of all odd numbers up to", num9, "is:", sumOfOdd);

// 3: Print the cubes of numbers from 1 to N
let num10 = 5;
for (let i = 1; i <= num10; i++) {
   console.log(`Cube of ${i} is: ${i ** 3}`);
}

// 4: Print only the numbers that are both even and perfect squares
let num11 = 20;
for (let i = 1; i <= num11; i++) {
  let sqrt = Math.sqrt(i);
  if (Number.isInteger(sqrt) && i % 2 === 0) {
    console.log(i);
  }
}
