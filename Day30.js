//Mexican Wave
//Problem Statement: To create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

function wave(str) {
    const returningArray = []

    for(let i=0; i<str.length; i++){
        if(str.charAt(i) === " ") continue

        if(i === str.length-1){
            returningArray.push(str.substr(0, i) + (str.charAt(i)).toUpperCase())
            continue
        }

        returningArray.push(str.substr(0, i) + (str.charAt(i)).toUpperCase() + str.substr(i+1))
    }

    return returningArray
}

console.log(wave("hello"));
console.log(wave("two words"));
console.log(wave("gap"));
