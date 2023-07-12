// You've got a 5 × 5 matrix, consisting of 24 zeroes and a single number one.
    // Let's index the matrix rows by numbers from 1 to 5 from top to bottom,
    // let's index the matrix columns by numbers from 1 to 5 from left to
// right. In one move, you are allowed to apply one of the two following
// transformations to the matrix:
//
    // Swap two neighboring matrix rows, that is, rows with indexes i and i + 1
// for some integer i (1 ≤ i < 5). Swap two neighboring matrix columns, that
// is, columns with indexes j and j + 1 for some integer j (1 ≤ j < 5). You
// think that a matrix looks beautiful, if the single number one of the matrix
// is located in its middle (in the cell that is on the intersection of the
    // third row and the third column). Count the minimum number of moves
// needed to make the matrix beautiful.
//
    // Input The input consists of five lines, each line contains five
// integers: the j-th integer in the i-th line of the input represents the
// element of the matrix that is located on the intersection of the i-th row
// and the j-th column. It is guaranteed that the matrix consists of 24 zeroes
// and a single number one.
//
    // Output Print a single integer — the minimum number of moves needed to
// make the matrix beautiful.

// 0 0 0 0 0
// 0 0 0 0 1
// 0 0 0 0 0
// 0 0 0 0 0
// 0 0 0 0 0
// (4, 1)
// (2, 2)
function main() {
    let [x1, y1] = [2, 2]; // the middle square
    let x2, y2;
    for (let i = 0; i < 5; i++) {
        let l = readline().split(" ");
        for (let j = 0; j < l.length; j++) {
            if (l[j] == 1) {
                [x2, y2] = [i, j];
                break;
            }; 
        }
        
    }
    console.log(Math.abs(x1 - x2) + Math.abs(y1 - y2));
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