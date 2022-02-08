const needsLicense = (kind) => {
    return kind === 'car' || kind === 'truck'
}

const chooseVehicle = (option1, option2) => {
    return (option1 > option2 ? option2 : option1) + " is clearly the better choice."
}

const calculateResellPrice = (originalPrice, age) => {
    if (age < 3) return originalPrice*0.8
    if (age >= 3 && age <= 10) return originalPrice*0.7

    return originalPrice*0.5
}

console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'))
console.log(chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf'))