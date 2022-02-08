//Problem Statement: Write a function which accepts two valid dates and returns the difference between them as number of days

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2){
    const day1 = new Date(dateText1)
    const day2 = new Date(dateText2)
    const DifferenceInTime = Math.abs(day2.getTime() - day1.getTime())
    return DifferenceInTime / DAY_IN_MILLISECONDS
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)
console.log(`Days difference: ${getDaysBetweenDates('11/10/2021', '11/12/2021')}`)
console.log(`Days difference: ${getDaysBetweenDates('11/01/2020', '11/05/2020')}`)