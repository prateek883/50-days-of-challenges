//Problem Statement: Write a function to truncate a string to a certain number of words

const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3
const str2 = 'Codedamn is the best place to learn to code'
const wordLimit2 = 5

function truncateWithWordLimit(str, wordLimit) {
    // write your solution here

    return str.toString().split(" ").splice(0, wordLimit).join(" ")
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)
console.log(`Truncated string: ${truncateWithWordLimit(str2, wordLimit2)}`)