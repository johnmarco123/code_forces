// Capitalization is writing a word with its first letter as a capital letter.
    // Your task is to capitalize the given word.
//
    // Note, that during capitalization all the letters except the first one
// remains unchanged.
//
    // Input A single line contains a non-empty word. This word consists of
// lowercase and uppercase English letters. The length of the word will not
// exceed 103.
//
    // Output Output the given word after capitalization.
function main() {
    let a = readline().split("");
    a[0] = a[0].toUpperCase();
    console.log(a.join(""));
}







// ===========================================================================
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readline() {
    return inputString[currentLine++];
}
