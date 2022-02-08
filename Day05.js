//Problem Statement: Write a function which accepts a string argument and returns the count of characters        between the first and last character 'X'

const str = 'XeroX';
const str2 = 'Xamarin'
const str3 = 'JavaScript'
const str4 = 'F(X) !== G(X) !== F(X)'

function getTheGapX(str) {
    // write your solution here

    const firstIndex = str.indexOf('X')

    if(firstIndex === -1){
        return -1
    }

    const lastIndex = str.lastIndexOf('X')

    return lastIndex - firstIndex
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)
console.log(`Gap between the X's: ${getTheGapX(str2)}`)
console.log(`Gap between the X's: ${getTheGapX(str3)}`)
console.log(`Gap between the X's: ${getTheGapX(str4)}`)
