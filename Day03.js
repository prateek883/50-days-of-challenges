//Problem Statement: Write a program to reverse a given integer number

const num = 3849;

function reverseGivenInteger(num) {

    let myNewNum = 0

    while (parseInt(num) > 0){
        myNewNum = (parseInt(myNewNum) * 10) + (parseInt(num) % 10)
        num /= 10
    }

    return myNewNum
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)