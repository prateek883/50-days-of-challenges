function formatDuration(seconds) {
    const timeChart = {
        'Year': 31536000,
        'Day': 86400,
        'Hour': 3600,
        'Minute': 60,
        'Second': 1
    }

    const timeArray = [0, 0, 0, 0, 0]
    let currentPos = 0
    let isEmpty = true


    for(let key in timeChart){
        let currentValue = timeChart[key]

        while(currentValue <= seconds){
            timeArray[currentPos] += Math.floor(seconds/currentValue)
            seconds %= currentValue
        }

        currentPos++
    }

    let finalString = ""

    for(let i=0; i<timeArray.length; i++){
        if(timeArray[i] === 0) continue

        isEmpty = false
        if(i === 0 && timeArray[i] === 1) finalString += timeArray[i]+" year"
        else if(i === 0) finalString += timeArray[i]+" years"


        if(timeArray[i-1]!==0 && i===1 && timeArray[i] === 1) finalString += ", "+timeArray[i]+" day"
        else if(timeArray[i-1]!==0 && i===1) finalString += ", "+timeArray[i]+" days"
        else if(i===1 && timeArray[i] === 1) finalString += timeArray[i]+" day"
        else if(i===1) finalString += timeArray[i]+" days"


        if(timeArray[i-1]!==0 && i===2 && timeArray[i] === 1) finalString += ", "+timeArray[i]+" hour"
        else if(timeArray[i-1]!==0 && i===2) finalString += ", "+timeArray[i]+" hours"
        else if(i===2 && timeArray[i] === 1) finalString += timeArray[i]+" hour"
        else if(i===2) finalString += timeArray[i]+" hours"


        if(timeArray[i-1]!==0 && i===3 && timeArray[i] === 1) finalString += ", "+timeArray[i]+" minute"
        else if(timeArray[i-1]!==0 && i===3) finalString += ", "+timeArray[i]+" minutes"
        else if(i===3 && timeArray[i] === 1) finalString += timeArray[i]+" minute"
        else if(i===3) finalString += timeArray[i]+" minutes"


        if(timeArray[i-1]!==0 && i===4 && timeArray[i] === 1) finalString += " and "+timeArray[i]+" second"
        else if(timeArray[i-1]!==0 && i===4) finalString += " and "+timeArray[i]+" seconds"
        else if(i===4 && timeArray[i] === 1) finalString += timeArray[i]+" second"
        else if(i===4) finalString += timeArray[i]+" seconds"
    }

    if(isEmpty) return "now"

    return finalString
}

console.log(formatDuration(1))
console.log(formatDuration(3662))
console.log(formatDuration(62))