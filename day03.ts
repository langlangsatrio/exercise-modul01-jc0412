/**-------------------------------------------- */


//Number 01 : 9 multiplication [SOLVED]
let inputNumberOne = 9;
let result = ``;

for (let i = 1; i <= 10; i++) {
    let string = `| ${inputNumberOne} x ${i} | \n`
    console.log(string);
    result+=string;
}
console.log(result)


/**-------------------------------------------- */


//Number 02 : Palindrome Checker [SOLVED]
let inputPalindrome = "mobil";
let palindromeChecker = "";

for (let i = inputPalindrome.length - 1; i >= 0; i--) {
    console.log(i);
    palindromeChecker += inputPalindrome.slice(i, i+1);
    console.log(palindromeChecker)
}

console.log(palindromeChecker)

if (inputPalindrome === palindromeChecker) {
    console.log(`${inputPalindrome} is a palindrome!`)
} else {
    console.log(`${inputPalindrome} is not a palindrome!`)
};


/**-------------------------------------------- */


//Number 03 : Convert CM to KM [SOLVED]
let inputCM = 100000;
let outputKM = `${inputCM/100000} KM`;
console.log(outputKM)


/**-------------------------------------------- */


//Number 04 : Currency converter [UNSOLVED]
let currencyInput = 1000000;
let currencyString = currencyInput.toString()
console.log(currencyString);


//Insert titik ke index 1
//Insert titik setiap 3 index setelah index 1
//Insert RP dan titik dua di akhir -> Bisa pakai template literal

/**-------------------------------------------- */


//Number 5 : Search and Replace String
let defaultString = "hello world";
let searchString = "orld";
let replace = defaultString.replace(searchString, "");
console.log(replace);


/**-------------------------------------------- */


//Number 6 : Capital Letter [MY SOLUTION => UNSOLVED]
let inputCapitalLetter = "Hello world";
let inputCapitalLetterFormatted = "";

for (let i = 0; i < inputCapitalLetter.length; i++) {
    let letterTaker = inputCapitalLetter.slice(i, i+1);
    console.log(letterTaker);
    
    if (letterTaker == " ") {
        letterTaker = letterTaker.substring(i, i+2).toUpperCase();
    };

    console.log(letterTaker);
    inputCapitalLetterFormatted+=letterTaker;    
    
}

console.log(inputCapitalLetterFormatted);

//ANSWER FROM DISCUSSION

let sentenceCap: string = "hello new world";
let resultCap: string = "";

for (let i: number = 0; i < sentenceCap.length; i++) {
  if (i === 0 || sentenceCap.charAt(i - 1) === " ") {
    resultCap += sentenceCap.charAt(i).toUpperCase();
  } else {
    resultCap += sentenceCap.charAt(i);
  }
  console.log(resultCap);
}

console.log(resultCap);

/**-------------------------------------------- */


//Number 7 : Letter case switcher

let inputLetter = "pURwaDhiKa";
let outputLetter = "";

for (let i = 0; i < inputLetter.length; i++) {
    let letterTaker = inputLetter.slice(i, i+1);
    console.log(letterTaker);
    
    if (letterTaker == letterTaker.toUpperCase()) {
        letterTaker = letterTaker.toLowerCase()
    } else {
        letterTaker = letterTaker.toUpperCase()
    }
    console.log(letterTaker);
    outputLetter+=letterTaker;
}

console.log(outputLetter)


/**-------------------------------------------- */


//Number 8 : Find largest integer
let numberA = 80;
let numberB = 76;

if (numberA > numberB) {
    console.log(numberA)
} else {
    console.log(numberB);
    
}


/**-------------------------------------------- */


//Number 9 Sort three numbers

let inputNumber1 = 99;
let inputNumber2 = 888;
let inputNumber3 = 70;
let resultSort = 0;
let isEnd = false;

//Kalkulasi nilai terbesar antara total data (Math.max?)
//Keluarkan nilai terbesar ke variabel penampung dan ulangi step pertama sampai data habis (while?)



//Cari nilai terbesar dan terkecil
//Cocokkan nilai terbesar

let biggest = Math.max(inputNumber1, inputNumber2, inputNumber3);
let smallest = Math.min(inputNumber1, inputNumber2, inputNumber3);
console.log(biggest);
console.log(smallest);

if (biggest === inputNumber1) {}

/**-------------------------------------------- */


//Number 10 : Log based on input data

let inputData1 = 99;

if (typeof inputData1 === 'string') {
    console.log('1')
} else if (typeof inputData1 === 'number') {
    console.log('2');
} else {
    console.log('3');
}


/**-------------------------------------------- */


//Number 11 : Changing A into *
let characterChangeInput = "An apple a day keeps the doctor away";

for (let i = 0; i < characterChangeInput.length; i++) {
    characterChangeInput = characterChangeInput.replace("A", "a");
    characterChangeInput = characterChangeInput.replace("a", "*");
    console.log(characterChangeInput);
}

console.log(characterChangeInput);


/**-------------------------------------------- */

