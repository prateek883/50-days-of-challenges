//Problem Statement: Write a program to find the greatest common divisor (gcd) of two positive numbers.

function gcd(a, b) {
    if(a < 0 || b < 0) return -1

    if(b === 0) return a

    return gcd(b, a % b)
}

console.log(gcd(2154, 458))
console.log(gcd(12, 4))
console.log(gcd(333, 3333))