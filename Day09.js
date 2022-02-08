//Problem Statement: Write a function to check if an object is empty or not in javaScript

const obj = { key: 1 };
const obj2 = {};

function isEmpty(obj) {
    return Object.entries(obj).length === 0
}

console.log(`is empty object: ${isEmpty(obj)}`)
console.log(`is empty object: ${isEmpty(obj2)}`)