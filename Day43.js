const ALPHA_SCORE_MAP = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26,
}


function high(x) {
    const wordArray = x.split(" ")

    let startingPoint = 0
    let endingPoint = wordArray.length - 1
    let globalMax = 0
    let globalMaxString = ''

    while (startingPoint <= endingPoint){
        let startingSum = 0
        let startPointer = 0
        let endPointer = wordArray[startingPoint].length -1

        while(startPointer <= endPointer){
            startingSum += ALPHA_SCORE_MAP[wordArray[startingPoint].charAt(startPointer)]

            if(startPointer === endPointer){
                startPointer++
                endPointer--
                continue
            }

            startingSum += ALPHA_SCORE_MAP[wordArray[startingPoint].charAt(endPointer)]
            startPointer++
            endPointer--
        }

        if (startingPoint === endingPoint){
            if (startingSum <= globalMax) {
                globalMax = startingSum
                globalMaxString = wordArray[startingPoint]
            }
            startingPoint++
            endingPoint--
            continue
        }

        let endingSum = 0
        startPointer = 0
        endPointer = wordArray[endingPoint].length -1

        while(startPointer <= endPointer){
            endingSum += ALPHA_SCORE_MAP[wordArray[endingPoint].charAt(startPointer)]

            if(startPointer === endPointer){
                startPointer++
                endPointer--
                continue
            }

            endingSum += ALPHA_SCORE_MAP[wordArray[endingPoint].charAt(endPointer)]
            startPointer++
            endPointer--
        }

        if (startingSum >= endingSum && startingSum >= globalMax) {
            globalMax = startingSum
            globalMaxString = wordArray[startingPoint]
        }
        else if(endingSum > startingSum && endingSum >= globalMax) {
            globalMax = endingSum
            globalMaxString = wordArray[endingPoint]
        }

        startingPoint++
        endingPoint--
    }

    return globalMaxString.trim()
}

console.log(high('man i need a taxi up to ubud'))
console.log(high('what time are we climbing up the volcano'))