function computerPlay() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var computerResponse = getRandomInt(1,3);

    if (computerResponse == 1) {
            text = ("Rock")
    }
    if (computerResponse == 2) {
            text = ("Paper")
    }
    if (computerResponse == 3) {
            text = ("Scissors")
    }
    console.log(text)
}