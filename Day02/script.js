// Day-02:

// 1: Find the Maximum of Three Numbers
function findMax(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= c) {
    return b;
  } else {
    return c;
  }
}
console.log("Maximum number is:", findMax(10, 20, 5));

// 2: Check if a Number is Positive, Negative, or Zero
function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log(checkNumber(-3));

// 3: Calculate Electricity Bill
function calculateBill(units){
    let bill =0;
    if(units <= 100){
        bill=units*5;
    }else if(units <= 200){
        bill = (100 * 5) + (units-100) * 7;
    }
    else if(units <= 300){
        bill = (100 * 5) + (100 * 7) + (units - 200) * 10;
    }
    else if(units <= 400){
        bill = (100 * 5) + (100 * 7) + (100 * 10) + (units - 300) * 12;
    }
      console.log(`Total Bill = ₹${bill}`);
}

calculateBill(230)

// 4: Check if a Character is a Vowel or Consonant
function checkVowels(char = '0'){
    if('aeiou'.includes(char.toLowerCase()) && char !== '')
        return  'Vowel';
    else if(/[a-z]/.test(char.toLowerCase())){
        return 'Consonant'
    }
     return 'Not a valid alphabet';
}
console.log(checkVowels("a"));

// 5: Check if a Year is a Leap Year
function checkLeapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ){
        console.log(year, " is a leap year");
    }else{
        console.log(year, " is not a leap year");
    }
}
checkLeapYear(2023);


//  Extra Practice Challenge
// 1: Check if a Character is Uppercase, Lowercase, Digit, or Special Character
function checkCharacterType(ch){
    let code = ch.charCodeAt(0);
    if(code>=65 && code<=90){
        console.log("Uppercase");
    }else if(code>=97 && code<=122){
        console.log("Lowercase");
    }else if(code>=48 && code<=57){
        console.log("Digit");
    }else{
        console.log("Special Character");
    }
}
checkCharacterType("A");

// 2: Check Triangle Type Using Sides and Angles
// Check Triangle Type
function checkTriangleType(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Not a valid triangle";
  }
  if (a === b && b === c) {
    return "Equilateral Triangle";
  }
  else if (a === b || b === c || a === c) {
    return "Isosceles Triangle";
  }
  else if (
    a * a + b * b === c * c ||
    a * a + c * c === b * b ||
    b * b + c * c === a * a
  ) {
    return "Right-Angled Triangle";
  }
  else {
    return "Scalene Triangle";
  }
}
console.log(checkTriangleType(3, 4, 5)); 

// 3: Calculate Income Tax Based on Slabs
function calculateTax(income) {
  let tax = 0;

  if (income <= 250000) {
    tax = 0;
  } 
  else if (income <= 500000) {
    tax = (income - 250000) * 0.05;
  } 
  else if (income <= 1000000) {
    tax = (250000 * 0.05) + (income - 500000) * 0.2;
  } 
  else {
    tax = (250000 * 0.05) + (500000 * 0.2) + (income - 1000000) * 0.3;
  }

  return tax;
}

console.log("Tax =", calculateTax(750000));
