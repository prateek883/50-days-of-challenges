//Statement: Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


function spinWords(string) {
    const stringArray = string.split(" ")
    let startPoint = 0
    let endPoint = stringArray.length - 1

    while(startPoint <= endPoint){
        if(startPoint === endPoint){
            if(stringArray[startPoint].length >= 5){
                stringArray[startPoint] = spinLetters(stringArray[startPoint])
            }

            startPoint++
            endPoint--
            continue
        }

        if(stringArray[startPoint].length >= 5){
            stringArray[startPoint] = spinLetters(stringArray[startPoint])
        }

        if(stringArray[endPoint].length >= 5){
            stringArray[endPoint] = spinLetters(stringArray[endPoint])
        }

        startPoint++
        endPoint--
    }

    return stringArray.join(" ")
}


function spinLetters(word){
    const wordArray = word.toString().split('')
    let startPoint = 0
    let endPoint = wordArray.length - 1

    while(startPoint <= endPoint){
        let temp = wordArray[startPoint]
        wordArray[startPoint] = wordArray[endPoint]
        wordArray[endPoint] = temp

        startPoint++
        endPoint--
    }

    return wordArray.join('')
}

console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("You are almost to the last test"))
console.log(spinWords("Seriously this is the last one"))