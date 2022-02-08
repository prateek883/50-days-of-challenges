function isIsogram(str) {
    str = str.trim()
    if (str === "") return true

    const letterSet = new Set()

    let startingPoint = 0
    let endingPoint = str.length - 1

    while(startingPoint <= endingPoint){
        if(letterSet.has(str.charAt(startingPoint).toLowerCase())) return false
        letterSet.add(str.charAt(startingPoint).toLowerCase())

        if(startingPoint === endingPoint){
            startingPoint++
            endingPoint--
            continue
        }

        if(letterSet.has(str.charAt(endingPoint).toLowerCase())) return false
        letterSet.add(str.charAt(endingPoint).toLowerCase())

        startingPoint++
        endingPoint--
    }

    return true
}

console.log(isIsogram("isogram"))
console.log(isIsogram(""))
console.log(isIsogram("moOse"))
