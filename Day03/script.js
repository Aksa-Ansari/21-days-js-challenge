// Day 03
// 1: Print Right-Angled Star Triangle
let rows = 5;
for(let i=1; i<=rows; i++){
    let pattern ="";
    for(let j=1; j<=i; j++){
        pattern += "*";
    }
    console.log(pattern);
}

// 2: Print Inverted Right-Angled Triangle
for (let i = 5; i>= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}

// 3: Print Inverted Pyramid Pattern
let row = 5;
for(let i=1; i<=row; i++){
    let pattern="";
    // For space
    for(let space=1; space<=i; space++){
        pattern+=" ";
    }
    // For Stars
    for(let star=1; star <= (2 *(row-i)+1); star++) {
        pattern += "*"
    }
    console.log(pattern);
}

// 4: Print Hollow Square Pattern
let rowss= 5;
for(let i=1; i<=rows; i++){
    let pattern="";
    for(let j=1; j<=rowss; j++){
        if(i===1 || i===rows || j===1 || j===rows){
            pattern += "*";
        }else{
            pattern += " ";
        }
    }
    console.log(pattern);
}

// 5: Print Hollow Pyramid Pattern
let roww = 5;
for (let i = 1; i <= rows; i++) {
  let pattern = "";

  // spaces before stars
  for (let space = i; space < rows; space++) {
    pattern += " ";
  }

  // stars and spaces inside pyramid
  for (let j = 1; j <= (2 * i - 1); j++) {
    // border stars condition
    if (j === 1 || j === (2 * i - 1) || i === rows) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }

  console.log(pattern);
}

