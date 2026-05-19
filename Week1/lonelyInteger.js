// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example

// The unique element is .

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the element that occurs only once
// Input Format

// The first line contains a single integer, , the number of integers in the array.
// The second line contains  space-separated integers that describe the values in .

// Constraints

// It is guaranteed that  is an odd number and that there is one unique element.
// , where .


/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

let a = [1,2,3,4,3,2,1];

// function lonelyinteger(a) {
//     // Write your code here
//     let numberObjCounter = {};
//     let lowestVal = Infinity;
//     let keyValue = null;

//     for (let i = 0; i < a.length; i++){
//         let currVal = a[i];
//         numberObjCounter[currVal] = (numberObjCounter[currVal] || 0) + 1
//     }

//     console.log('OBJ', numberObjCounter)
//     for (let key in numberObjCounter) {

//         if(numberObjCounter[key] < lowestVal) {
//             lowestVal = numberObjCounter[key]
//             // console.log(lowestVal)
//             keyValue = key;
//             // console.log(keyValue)
//         }
//     }
//     console.log(keyValue)
//     // return keyValue;

// }


function lonelyinteger(a) {
    // Write your code here
    let numberObjCounter = {};

    for (let i = 0; i < a.length; i++){
        let currVal = a[i];
        numberObjCounter[currVal] = (numberObjCounter[currVal] || 0) + 1
    }


    for (let key in numberObjCounter) {

        if(numberObjCounter[key] === 1) {
            return key
        }
    }
}


console.log(lonelyinteger(a));
