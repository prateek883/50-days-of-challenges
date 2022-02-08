//Problem Statement: Equal Sides Of An Array
//You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
    //Code goes here!
    if(arr.length <= 2){
        return -1
    }

    let totalSum = 0
    let initialIndex = 0
    let endingIndex = arr.length - 1

    while(initialIndex <= endingIndex){
        if(initialIndex === endingIndex){
            totalSum += arr[initialIndex]
            initialIndex++
            endingIndex--
            continue
        }

        totalSum += arr[initialIndex]
        totalSum += arr[endingIndex]
        initialIndex++
        endingIndex--
    }

    let startingIndex = 1
    let currentLeftSum = arr[0]

    while(startingIndex < (arr.length) - 1){
        const currentRightSum = totalSum - (currentLeftSum + arr[startingIndex])
        if(currentLeftSum === currentRightSum) return startingIndex

        currentLeftSum += arr[startingIndex]
        startingIndex++
    }
    return -1
}


console.log(findEvenIndex([1,2,3,4,3,2,1]))
console.log(findEvenIndex([1,100,50,-51,1,1]))
console.log(findEvenIndex([1,2,3,4,5,6]))
console.log(findEvenIndex([20,10,30,10,10,15,35]))