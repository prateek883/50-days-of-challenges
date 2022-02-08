//Write a Program to Find the Factorial of a Number

function factorial(n) {
    // write your code here
    if(n < 0) return -1
    if(n <= 2) return n

    let currentFactorialValue = 2
    let startingPoint = 3
    let endingPoint = n

    while(startingPoint <= endingPoint){
        if(startingPoint === endingPoint){
            currentFactorialValue *= startingPoint
            startingPoint++
            endingPoint--
            continue
        }

        currentFactorialValue *= startingPoint
        currentFactorialValue *= endingPoint

        startingPoint++
        endingPoint--
    }

    return currentFactorialValue
}

let n = 4;
let n2 = 5;
let n3 = 10;
console.log("The factorial of " + n + " is " + factorial(n));
console.log("The factorial of " + n2 + " is " + factorial(n2));
console.log("The factorial of " + n3 + " is " + factorial(n3));