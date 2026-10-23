function generateTemperature() {
    return Math.floor(Math.random() * 16) + 15;
}

console.log(generateTemperature() + "°C");