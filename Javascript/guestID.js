function generateGuestID() {
    return Math.floor(Math.random() * 9000) + 1000;
}

console.log("Guest ID: " + generateGuestID());