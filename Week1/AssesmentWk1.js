// /*
//  * Complete the 'flippingMatrix' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
//  */

// function flippingMatrix(matrix) {
//     // Write your code here

// }


// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the 'findMedian' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts INTEGER_ARRAY arr as parameter.
//  */

// function findMedian(arr) {
//     // Write your code here
//     if (arr.length === 1) {
//         return arr[0]
//     }
//     let sortArr = arr.sort();
//     // console.log('SORT', sortArr)
//     let middleValIndex = Math.floor(sortArr.length / 2);
//     // console.log('INDEX', middleValIndex)
//     return sortArr[middleValIndex]
// }

console.log()
