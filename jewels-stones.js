function countJewels(jewels, stones) {
    // loop through jewels, compare each character in jewels to stones array, return number of matches

    let numberOfJewels = 0
    for (i = 0; i < jewels.length; i++) {
        for (j = 0; j < stones.length; j++) {
            if (jewels[i] === stones[j]) {
                numberOfJewels++
        }
    }
}
return numberOfJewels;
}

console.log(countJewels("aAB", "aAAB"));
