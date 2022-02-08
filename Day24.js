//Problem Statement: Write Number in Expanded Form
//expandedForm(12); // Should return '10+2'
// expandedForm(42); // Should return '40+2'

function expandedForm(num) {
    // Your code here
    const currentNumArray = (num.toString().split('')).filter(num => parseInt(num)!==0)
    let currentMultiplyingFactor = 1
    let currentPos = currentNumArray.length - 1

    while(currentPos >= 0){
        currentNumArray[currentPos] = (parseInt(currentNumArray[currentPos]) * currentMultiplyingFactor).toString()
        currentMultiplyingFactor *= 10
        currentPos--
    }

    return (currentNumArray.join('+')).trim()
}

console.log(expandedForm(12))
console.log(expandedForm(42))
console.log(expandedForm(734))
console.log(expandedForm(73040))