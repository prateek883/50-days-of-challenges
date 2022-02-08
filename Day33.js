//Problem Statement: Write a program to print unique values from an array

function set(arrOfNum) {
    const returningArray = []

    for(let num of arrOfNum){
        if(!returningArray.includes(num)) returningArray.push(num)
    }

    return returningArray
}

const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

console.log("result is + " + set(arrOfNum));