// Number 1: Check number is even or odd
let number = 10;
const numberChecker = number % 2;
if (numberChecker === 0) {
    console.log(`${number} is even number!`)
} else {
    console.log(`${number} is odd number!`)
};


//Number 2: Prime Number [UNSOLVED] //
let primeNumber = 18;
for (let i = 2; i < primeNumber; i++) {
    if (primeNumber % i === 0) {
        console.log(`${primeNumber} is not a prime number`)
    } else {
        console.log(`${primeNumber} is a prime number`)
    } break
}


//Number 3 : Sum Number
let sumNum = 5
let counterSum = 0
for (let i = 0; i <= sumNum; i++) {
    counterSum+=i
}
console.log(counterSum)


//Number 4 : Factorial Num
let factorialNum = 6;
let factorialCounter = 1;
for (let i = factorialNum; i > 0; i--) {
    factorialCounter = factorialCounter * i;
}
console.log(factorialCounter)

//Number 5 : Fibonacci
let fiboNum = 15;
let firstPrev = 0;
let secondPrev = 1;
for (let i = 1; i <= fiboNum; i++) {
    let nextNumber = firstPrev + secondPrev
    firstPrev = secondPrev;
    secondPrev = nextNumber;
    console.log(nextNumber)
    console.log(firstPrev)
    console.log(secondPrev)
}




