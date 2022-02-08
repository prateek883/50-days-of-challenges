//Problem Statement: Find if a year is Leap Year or not.

const isLeap = (year) => {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

console.log(isLeap(1996))
console.log(isLeap(1997))
console.log(isLeap(1900))
console.log(isLeap(2000))
console.log(isLeap(2020))
console.log(isLeap(2022))
