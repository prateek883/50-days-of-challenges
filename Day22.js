//Problem Statement: Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//
// The argument can contain a string or an array

let uniqueInOrder = (iterable) => {
    //your code here - remember iterable can be a string or an array
    if(iterable.length === 0){
        return
    }

    if(typeof (iterable) == "string"){
        const stringArray = iterable.split('')
        const returningString = []
        returningString.push(stringArray[0])

        if(stringArray.length === 1){
            return returningString
        }

        for(let i=1; i<stringArray.length; i++){
            if(stringArray[i] === stringArray[i-1]){
                continue
            }

            returningString.push(stringArray[i])
        }

        return returningString
    }

    const returningList = []
    returningList.push(iterable[0])

    if(iterable.length === 0){
        return returningList
    }

    for(let i=1; i<iterable.length; i++){
        if(iterable[i] === iterable[i-1]){
            continue
        }

        returningList.push(iterable[i])
    }

    return returningList
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1,2,2,3,3]))