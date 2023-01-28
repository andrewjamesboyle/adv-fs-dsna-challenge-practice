const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

function uniqueWords(words) {
    
    const morseWords = words.map(wordToMorse);
    return uniqueMorseWords(morseWords);
    
    }


console.log(1, uniqueWords(["gin", "zen"]));
console.log(1, uniqueWords(["gig", "msg"]));
console.log(2, uniqueWords(["george", "santa"]));
console.log(2, uniqueWords(["gin", "zen", "gig", "msg"]));

function wordToMorse(word) {
    const chars = word.split('')
    const newMorse = chars.map(charToMorse)
    return newMorse.join('')
}

function charToMorse(char) {
    const codeIndex = char.charCodeAt(0) - 97;
    return codes[codeIndex]
}

function uniqueMorseWords(morseCodeWords) {
    const sortedMorse = new Set(morseCodeWords);
    return sortedMorse.size
}