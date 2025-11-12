// Day04

// 1 Split Number into Digits
// Input: N = 12345
// Output: [1, 2, 3, 4, 5]
// Extract each digit mathematically using, and return them in an array. Do not use string operations.
let n=12345;
let arr=[];
while(n>0){
    let lastDigit = n%10;
    arr.push(lastDigit);
    n=Math.floor(n/10);
}
arr.reverse()
console.log(arr);


// 2 Remove the Decimal Point Mathematically
// Input: N = 12.34
// Output: 1234
// Do not use string operations.
let num = 12.34;
while(num%1 !==0){
    num=num*10;
}
console.log(num);


// 3 Separate Whole and Fractional Parts of a Number
// Input: N = 5.75
// Output: Whole = 5, Fraction = 0.75
// Use mathematical logic to separate the integer and fractional portions without using built-in functions. Don't use Math.trunc() method.
let N = 5.75;
let fraction = N%1;
let whole = N-fraction;
console.log("Whole =", whole);
console.log("Fraction =", fraction);


// 4 Count Whole and Fractional Digits Separately
// Input: N = 12.345
// Output: Whole Count = 2, Fraction Count = 3
// Separate the number into whole and fractional parts, then count digits in each part using pure math. Don't use Math.trunc() method.
let numm = 12.345;
let fractionn = numm % 1;
let wholee = numm - fractionn;
let wholeCount = 0;
for (let tem = wholee; tem >= 1; tem = tem / 10) {
  wholeCount++;
}
let fractionCount = 0;
let tem = fractionn;

while (tem % 1 !== 0) {
  tem = parseFloat((tem * 10).toFixed(10));
  fractionCount++;
  if (fractionCount > 10) break;
}
console.log("Whole Count =", wholeCount);
console.log("Fraction Count =", fractionCount);


// 5 Generate a Decimal Number from Whole and Fractional Digits
// Input: Whole = [1, 2], Fraction = [3, 4]
// Output: 12.34
// Form the number mathematically by combining the digits from both arrays using powers of 10.
let whole1 = [1, 2];
let fraction1 = [3, 4];

let wholeNum = 0;
for (let i = 0; i < whole1.length; i++) {
  wholeNum = wholeNum * 10 + whole1[i];
}

let fracNum = 0;
for (let i = 0; i < fraction1.length; i++) {
  fracNum = fracNum + fraction1[i] / Math.pow(10, i + 1);
}

let number = wholeNum + fracNum;
console.log(number);
