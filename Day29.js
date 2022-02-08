//Problem Statement: Each char becomes n*chars where n is the index + 1, and the first char is capitalized divided by - instead of space.

function accum(s) {
    const finalStringArray = s.split('')
    let startingPoint = 0
    let endingPoint = finalStringArray.length - 1

    while(startingPoint<=endingPoint){
        if(startingPoint ===  endingPoint){
            let stringToBeReplacedBy = ''

            for(let i=0; i<=startingPoint; i++){
                if(i===0) {
                    stringToBeReplacedBy += finalStringArray[startingPoint].toUpperCase()
                    continue
                }

                stringToBeReplacedBy += finalStringArray[startingPoint].toLowerCase()
            }

            finalStringArray[startingPoint] = stringToBeReplacedBy
            startingPoint++
            endingPoint--
            continue
        }

        let stringToBeReplacedBy = ''

        for(let i=0; i<=startingPoint; i++){
            if(i===0) {
                stringToBeReplacedBy += finalStringArray[startingPoint].toUpperCase()
                continue
            }

            stringToBeReplacedBy += finalStringArray[startingPoint].toLowerCase()
        }

        finalStringArray[startingPoint] = stringToBeReplacedBy

        stringToBeReplacedBy = ''

        for(let i=0; i<=endingPoint; i++){
            if(i===0) {
                stringToBeReplacedBy += finalStringArray[endingPoint].toUpperCase()
                continue
            }

            stringToBeReplacedBy += finalStringArray[endingPoint].toLowerCase()
        }

        finalStringArray[endingPoint] = stringToBeReplacedBy

        startingPoint++
        endingPoint--
    }

    return finalStringArray.join('-')
}

console.log(accum("ZpglnRxqenU"))
console.log(accum("NyffsGeyylB"))
console.log(accum("MjtkuBovqrU"))