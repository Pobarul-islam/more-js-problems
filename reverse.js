const greethings = 'Hello, how are you?'
let reverse = '';
function reverseString(text) {
    for (const letter of text) {
        console.log(letter);
        reverse = letter + reverse;
    }
}
const reversed = reverseString(greethings);
console.log(reversed);