//Problem Statement: Given an array of integers, find the one that appears an odd number of times.
//Note: There will always be only one integer that appears an odd number of times.


function findOdd(arr) {
    if(arr.length === 0) return -1
    if(arr.length === 1) return arr[0]

    const numMap = new Map()

    arr.map(num => {
        let currentNumCount = numMap.get(num)

        if(currentNumCount === undefined){
            numMap.set(num, 1)
        }
        else{
            numMap.set(num, currentNumCount+1)
        }
    })

    for(const [key, value] of numMap.entries()){
        if(value % 2 !== 0) return key
    }

    return -1
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]))
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]))
console.log(findOdd([0]))
console.log(findOdd([1,1,2]))
console.log(findOdd([0,1,0,1,0]))
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))