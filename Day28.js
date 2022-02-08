//Problem Statement: Write a function toWeirdCase that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

function toWeirdCase(string) {
    const stringArray = string.split('')
    let startingPoint = 0
    let endingPoint = stringArray.length - 1

    while (startingPoint <= endingPoint){
        if(startingPoint === endingPoint){
            if(startingPoint % 2 === 0){
                stringArray[startingPoint] = stringArray[startingPoint].toUpperCase()
            }
            startingPoint++
            endingPoint--
            continue
        }

        if(startingPoint % 2 === 0){
            stringArray[startingPoint] = stringArray[startingPoint].toUpperCase()
        }

        if(endingPoint % 2 === 0){
            stringArray[endingPoint] = stringArray[endingPoint].toUpperCase()
        }

        startingPoint++
        endingPoint--
    }

    return stringArray.join('')
}

console.log(
    `The weird case of A test case is ${toWeirdCase("A test case")}`
);

console.log(
    `The weird case of This is ${toWeirdCase("This")}`
);

console.log(
    `The weird case of This is a test is ${toWeirdCase("This is a test")}`
);