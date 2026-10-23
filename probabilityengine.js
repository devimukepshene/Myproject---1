function lootBox() {
    let randomNumber = Math.random();

    if (randomNumber < 0.8) {
        return "Common";
    } else {
        return "Rare";
    }
}

console.log(lootBox());