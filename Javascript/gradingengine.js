function checkPassOrFail(score) {
    if (score < 0 || score > 100) {
        console.log("Invalid score. Please enter a value between 0 and 100.");
    } else if (score >= 40) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

checkPassOrFail(75); 
checkPassOrFail(35);