// 1: Check if a Number is Prime
// Input: 7
// Output: Prime Number
function checkPrime(num){
    if(num<=1)
        return false;
    for(let i=2; i<num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
console.log(checkPrime(7)? "prime" : "Not prime");

// 2: Check if two Numbers are Co-Prime
// Input: (7, 8)
// Output: Co-Prime
function coPrime(a,b){
    let min = Math.min(a,b);
    let hcf=1;
    for(let i=1; i<=min; i++){
        if(a%i===0 && b%i===0){
            hcf=i
        }
    }
    if(hcf===1){
        return "Co-prime"
    }else{
        return "Not Co-Prime"
    }
}
console.log(coPrime(7,8));

// 3: Print Fibonacci Series up to N Terms
// Input: N = 10
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
function printFibonacci(n) {
    let a = 0;
    let b = 1;

    console.log(a);
    console.log(b);

    for (let i = 3; i <= n; i++) {
        let next = a + b;
        console.log(next);

        a = b;
        b = next;
    }
}
console.log(printFibonacci(10));

// 4: Find the Nth Fibonacci Number
// Input: N = 8
// Output: 13
function nthFibonacci(n) {
    let a = 0;  
    let b = 1;  
    if (n === 1) return a; 
    if (n === 2) return b; 
      let next;
    for (let i = 3; i <= n; i++) {
        next = a + b;  
        a = b;         
        b = next;      
    }
    return b;
}
console.log(nthFibonacci(8));

// 5:Check if a Number Belongs to the Fibonacci Series
// Input: 21
// Output: Yes
function isFibonacci(num) {
    let a = 0;
    let b = 1;
    while (a <= num) {
        if (a === num) {
            return "Yes";
        }
        let next = a + b;
        a = b;
        b = next;
    }
    return "No";
}
console.log(isFibonacci(21));

// Homework Questions
// 1: Print All Prime Numbers up to N
// Input: N = 20
// Output: 2, 3, 5, 7, 11, 13, 17, 19
function printPrimes(n) {
    let primes = [];
    for (let num = 2; num <= n; num++) {
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    return primes;
}
console.log(printPrimes(20));

// 2: Sum of All Prime Numbers till N
// Input: N = 10
// Output: Sum = 17
function sumOfPrimes(n) {
    let sum = 0;

    for (let num = 2; num <= n; num++) {
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sum += num;
        }
    }
    return sum;
}
console.log(sumOfPrimes(10));
