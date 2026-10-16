function authenticate(suspended, passwordCorrect, mfaValid) {
    if (suspended) {
        return "Account Suspended";
    } else if (!passwordCorrect) {
        return "Incorrect Password";
    } else if (!mfaValid) {
        return "Invalid MFA Token";
    } else {
        return "Login Successful";
    }
}

console.log(authenticate(false, true, true));