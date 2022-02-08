function openOrSenior(data) {
    let startingPoint = 0
    let endingPoint = data.length - 1

    while(startingPoint <= endingPoint){
        if(data[startingPoint][0] >= 55  && data[startingPoint][1] > 7) data[startingPoint] = 'Senior'
        else data[startingPoint] = 'Open'

        if (startingPoint === endingPoint){
            startingPoint++
            endingPoint--
            continue
        }

        if(data[endingPoint][0] >= 55  && data[endingPoint][1] > 7) data[endingPoint] = 'Senior'
        else data[endingPoint] = 'Open'

        startingPoint++
        endingPoint--
    }

    return data
}

let output = openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
]);

console.log(output);