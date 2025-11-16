// Day05

// 1: Print All Factors of a Number
// Input: N = 24
// Output: [1, 2, 3, 4, 6, 8, 12, 24]
function findFactors(N) {
  let factors = [];
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}
console.log(findFactors(24));


// 2:Print All Multiples of a Number up to N
// Input: Number = 4, Limit = 30
// Output: [4, 8, 12, 16, 20, 24, 28]
function printMultiples(num, limit){
    let multiples=[];
    for(let i=1; i<=limit; i++){
        let value= i*num;
        if(value>limit){
            break
        }
        multiples.push(value);
    }
    return multiples;
}
let result=printMultiples(4,30)
console.log(result);

// 3: Find the HCF (Highest Common Factor) or GCD of Two Numbers
// Input: 12, 18
// Output: HCF = 6
function findHCF(a,b){
    let factor=1;
    let limit=Math.min(a,b)
    for(let i=1; i<=limit; i++){
        if(a%i===0 && b%i===0){
            factor=i
        }
    }
    return factor
}
console.log(findHCF(12,18));


// 4: Find the LCM (Least Common Multiple) of Two Numbers
// Input: 12, 18
// Output: LCM = 36
function findLCM(a, b) {
  let i = 1;
  while (true) {
    let multiple = a * i;

    if (multiple % b === 0) {
      return multiple;
    }

    i++;
  }
}
console.log(findLCM(12, 18)); // 36


//  Homework Questions

// 1:Count the Total Number of Factors of a Number
// Input: N = 24
// Output: 8 Factors
function countFactors(n){
    factor=[]
    for(let i=1; i<=n; i++){
        if(n%i===0){
            factor.push(i)       
        }
    }
    return factor.length;
}
console.log(countFactors(24));

// 2:Sum of All Factors of a Number
// Input: N = 12
// Output: Sum = 28
function SumFactors(n){
    let sum=0;
    for(let i=1; i<=n; i++){
        if(n%i===0){
            sum=sum+i;
        }
    }
    return sum;
}
console.log(SumFactors(12)); // output 28

// 3:Find the Greatest Factor of a Number (Other Than Itself)
// Input: N = 36
// Output: 18
function findGreaterFactor(n){
    for(let i=n-1; i>=1; i--){
        if(n%i===0){
            return i;
        }
    }
}
console.log(findGreaterFactor(36));

//4:Check if a Number is a Perfect Number
// Input: N = 28
// Output: Perfect Number
// If sum of all proper divisors = number → Perfect Number.

function checkFactor(n){
    let sum=0;
    for(let i=1; i<n; i++){
        if(n%i===0){
            sum=sum+i;
        }
    }

    if(sum===n){
        return `${n} is a perfect number`
    }else{
        return `${n} is not a perfect number`
    }
}
console.log(checkFactor(28));