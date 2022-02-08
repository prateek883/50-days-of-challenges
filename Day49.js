//Problem Statement: Is this a Triangle?

function isTriangle(a, b, c) {
    return (a+b) > c && (a+c) > b && (b+c) > a
}

console.log(isTriangle(1, 2, 2))
console.log(isTriangle(7, 2, 2))
console.log(isTriangle(7, 14, 16))