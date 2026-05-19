/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [9, 8, 9]
// ];

let arr = [
    [11, 2, 4],
    [4, 2, 6],
    [10, 8, -12]
];

function diagonalDifference(arr) {
    // Write your code here
    let leftDiagonal = 0;
    let rightDiagonal = 0;

    // let sizeArr = Math.min(arr.length, arr[0].length)

    for (let i = 0; i < arr.length; i++) {
        leftDiagonal += arr[i][i]
        rightDiagonal += arr[i][arr.length - 1 - i]
    }
    let calcDifference = Math.abs(rightDiagonal - leftDiagonal);
    // console.log(calcDifference)
    return calcDifference;

};

console.log(diagonalDifference(arr));
