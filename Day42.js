function sumTwoSmallestNumbers(numbers) {
    const lowestArray = findLowestArray(numbers)
    if (lowestArray[0] === null && lowestArray[1] === null) return 0
    if (lowestArray[1] === null) return lowestArray[0]
    return lowestArray[0] + lowestArray[1]
}

function findLowestArray(numbers){
    let lowestArray = [null, null]

    let startingPoint = 0
    let endingPoint = numbers.length - 1

    while (startingPoint <= endingPoint){
        if(lowestArray[0] === null) {
            lowestArray[0] = numbers[startingPoint]
        }
        else if(numbers[startingPoint] <= lowestArray[0]){
            lowestArray[1] = lowestArray[0]
            lowestArray[0] = numbers[startingPoint]
        }
        else if((numbers[startingPoint] > lowestArray[0]) && (lowestArray[1] === null || numbers[startingPoint] <= lowestArray[1])) lowestArray[1] = numbers[startingPoint]

        if(startingPoint === endingPoint){
            startingPoint++
            endingPoint--
            continue
        }

        if(lowestArray[0] === null) {
            lowestArray[0] = numbers[endingPoint]
        }
        else if(numbers[endingPoint] <= lowestArray[0]){
            lowestArray[1] = lowestArray[0]
            lowestArray[0] = numbers[endingPoint]
        }
        else if((numbers[endingPoint] > lowestArray[0]) && (lowestArray[1] === null || numbers[endingPoint] <= lowestArray[1])) lowestArray[1] = numbers[endingPoint]

        startingPoint++
        endingPoint--
    }

    return lowestArray
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]))