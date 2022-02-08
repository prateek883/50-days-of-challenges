//Problem Statement: Get the Middle Character

function getMiddle(s) {
    if(s.length % 2 !== 0){
        return s.charAt((Math.ceil(s.length / 2)) - 1)
    }
    return s.charAt((s.length / 2) - 1)+s.charAt((s.length / 2))
}

console.log(getMiddle("testing"))
console.log(getMiddle("A"))
console.log(getMiddle("test"))
console.log(getMiddle("middle"))
console.log(getMiddle(""))