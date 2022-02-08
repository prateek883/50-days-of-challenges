//Problem Statement: Given a number from 0 to 999,999,999,999, spell out that number in English.

//function for each three segment
const eachThree = (n) => {
    //Constants
    const SINGLE_ARRAY = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const TEEN_ARRAY = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    const DOUBLE_ARRAY = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    //For Single Digit
    if(n.toString().length === 1){
        return SINGLE_ARRAY[n]
    }

    //For Double Digits
    if(n.toString().length === 2){
        if(parseInt(n.toString().charAt(n.length - 2)) === 1){
            return TEEN_ARRAY[(n%10)]
        }

        if(n % 10 === 0){
            return DOUBLE_ARRAY[(n/10) - 2]
        }

        const partOne = DOUBLE_ARRAY[Math.floor((n/10)) - 2]
        const partTwo = SINGLE_ARRAY[n%10]

        return partOne + "-" + partTwo
    }

    if(n%100 === 0 && parseInt(n.toString().charAt(0)) !== 0){
        return SINGLE_ARRAY[(n/100)] + " hundred"
    }

    const remainingNumber = n - parseInt(`${parseInt(n.toString().charAt(0))}00`)

    if(remainingNumber.toString().length === 1){
        return SINGLE_ARRAY[Math.floor((n/100))] + " hundred " + SINGLE_ARRAY[remainingNumber]
    }

    if(parseInt(remainingNumber.toString().charAt(remainingNumber.length - 2)) === 1){
        return SINGLE_ARRAY[Math.floor((n/100))] + " hundred " + TEEN_ARRAY[(remainingNumber%10)]
    }

    if(remainingNumber % 10 === 0){
        return SINGLE_ARRAY[Math.floor((n/100))] + " hundred " + DOUBLE_ARRAY[(remainingNumber/10) - 2]
    }

    const partOne = DOUBLE_ARRAY[Math.floor((remainingNumber/10)) - 2]
    const partTwo = SINGLE_ARRAY[remainingNumber%10]

    return SINGLE_ARRAY[Math.floor((n/100))] + " hundred " + partOne + "-" + partTwo
}


const sayNumberInEnglish = (n) => {

    //Excluded
    if( n < 0 || n > 999999999999 ){
        return "INVALID RANGE"
    }

    if(n.toString().length <= 3) return eachThree(n).trim()

    const UPPER_SUFFIX = ["thousand", "million", "billion"]

    let dividedArray = []
    const totalNumString = n.toString()
    let currentLoop = 0
    let currentPointerPosition = totalNumString.length
    let currentString = ""

    while ( currentPointerPosition >= 0 ){
        currentPointerPosition--
        currentString = totalNumString.charAt(currentPointerPosition) + currentString
        currentLoop++
        if(currentLoop === 3 || currentPointerPosition === 0){
            dividedArray.push(currentString)
            currentString = ""
            currentLoop=0
        }
    }

    let finalString= ""
    let finalCounter = -1

    for(let i=0; i<dividedArray.length; i++){
        let partialResult = eachThree(parseInt(dividedArray[i]))

        if(partialResult.split(" ")[0] === "zero"){
            finalString = "" + finalString
            finalCounter++
            continue
        }

        if(finalCounter > -1){
            finalString = partialResult + " " + UPPER_SUFFIX[finalCounter] + " " + finalString
            finalCounter++
            continue
        }

        finalString = partialResult + " " + finalString
        finalCounter++
    }

    if(finalString === ""){
        return "zero"
    }

    return finalString.trim()
}

console.log(`5328743 in english is: ${sayNumberInEnglish(5328743)}`)