//Problem Statement: Write a JavaScript function to get nth largest element from an unsorted array.

function nthlargest(arr, highest) {
    arr.sort(
        (a, b) => {
            if (a>b) return 1
            if (a<b) return -1
            return 0
        }
    ).reverse()
    return arr[(highest-1)]
}

console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4));
console.log(nthlargest([ 10, 100, 1000, 10000], 2));