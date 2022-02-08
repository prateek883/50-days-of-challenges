/**
 *
 * @param {number[]} inputArray Array of numbers
 */
//Problem Statement: Longest Consecutive Sequence of numbers in an array

const TEST_CASE_1 = [100,4,200,1,3,2]
const TEST_CASE_2 = [0,3,7,2,5,8,4,6,0,1]

const longestConsecutiveSequence = (inputArray) => {
    // Your code here
    if(!inputArray.length) return 0

    const set = new Set(inputArray)
    let max = 0

    for(const num of set){
        if(set.has(num-1)) continue

        let currNum = num
        let currMax = 1

        while (set.has(currNum + 1)){
            currNum++
            currMax++
        }

        max = Math.max(max, currMax)
    }

    return max
}

console.log(longestConsecutiveSequence(TEST_CASE_1))
console.log(longestConsecutiveSequence(TEST_CASE_2))