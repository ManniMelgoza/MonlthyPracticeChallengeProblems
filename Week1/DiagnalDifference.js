/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];


function diagonalDifference(arr) {
    // Write your code here
    let leftDiagonal = 0;
    let rightDiagonal = 0;

    for (let i = 0; i < arr.length; i++) {
        leftDiagonal += arr[i][i]
        // console.log(leftDiagonal)
        rightDiagonal += arr[i][arr.length - 1 - i]
        // console.log(Rig)
    }

    return rightDiagonal - leftDiagonal


};


console.log(diagonalDifference(arr));
