//Problem Statement: Write a program to reverse a string

const str = "JavaScript is awesome"

function reverseAString(str) {
    let strArray = str.split('')

    let start = 0
    let end = (strArray.length) - 1

    while(start <= end){
        let temp = strArray[start]
        strArray[start] = strArray[end]
        strArray[end] = temp
        start++
        end--
    }

    return strArray.join('')
}

console.log(`Reversed string is: ${reverseAString(str)}`)