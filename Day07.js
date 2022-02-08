//Problem Statement: Create a regular expression to validate if the given input is valid Indian mobile number or not

const number = '+919876543210';
const number2 = '+91 9876543210'
const number3 = '09876543210'
const number4 = '9876543210'
const number5 = '99876543210'

function validateMobile(number) {
    const numberMatchingRegex = /^(\+91|0)?\s?\d{10}$/

    const result = numberMatchingRegex.test(number)

    return result
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)
console.log(`is a valid Indian mobile number: ${validateMobile(number2)}`)
console.log(`is a valid Indian mobile number: ${validateMobile(number3)}`)
console.log(`is a valid Indian mobile number: ${validateMobile(number4)}`)
console.log(`is a valid Indian mobile number: ${validateMobile(number5)}`)