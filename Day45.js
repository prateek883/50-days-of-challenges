//Problem Statement: Find The Parity Outlier

function findOutlier(integers) {
    let noOfEven = 0
    for(let i=0; i<3; i++){
        if(integers[i] % 2 === 0) noOfEven++
    }

    let isEven = false

    if(noOfEven > 1) isEven = true

    let startingPoint = 0
    let endingPoint = integers.length - 1

    while (startingPoint <= endingPoint){
        if(!isEven){
            if(integers[startingPoint] % 2 === 0) return integers[startingPoint]
            if(integers[endingPoint] % 2 === 0) return integers[endingPoint]
        }
        else{
            if(integers[startingPoint] % 2 !== 0) return integers[startingPoint]
            if(integers[endingPoint] % 2 !== 0) return integers[endingPoint]
        }
        startingPoint++
        endingPoint--
    }
}

console.log(findOutlier([2,6,8,10,3]))
console.log(findOutlier([0,0,3,0,0]))
console.log(findOutlier([1,1,0,1,1]))