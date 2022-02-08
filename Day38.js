const valid = (string) => {
    if(string.length < 1) return false

    if(!/^[0-9]*$/.test((string.split(" ")).join(''))) return false

    const mainStringArray = ((string.split(" ")).join('')).split('')

    for(let i=mainStringArray.length - 2; i>=0; i-=2){
        if(parseInt(mainStringArray[i]) * 2 > 9){
            mainStringArray[i] = ((parseInt(mainStringArray[i]) * 2) - 9).toString()
        }
        else{
            mainStringArray[i] = (parseInt(mainStringArray[i]) * 2).toString()
        }
    }

    let sum = 0

    let startingPoint = 0
    let endingPoint = mainStringArray.length - 1

    while(startingPoint <=endingPoint){
        sum += parseInt(mainStringArray[startingPoint])

        if(startingPoint=== endingPoint){
            startingPoint++
            endingPoint--
            continue
        }

        sum += parseInt(mainStringArray[endingPoint])

        startingPoint++
        endingPoint--
    }

    return sum % 10 === 0
}

console.log(valid('4539 3195 0343 6467'))
console.log(valid('8273 1232 7352 0569'))
console.log(valid('61789372994'))
console.log(valid('6178937a994'))
console.log(valid(''))
console.log(valid('67'))