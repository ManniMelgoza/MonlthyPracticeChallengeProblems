/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

let arr = [
  63, 25, 73, 1, 98, 73, 56, 84, 86, 57,
  16, 83, 8, 25, 81, 56, 9, 53, 98, 67,
  99, 12, 83, 89, 80, 91, 39, 86, 76, 85,
  74, 39, 25, 90, 59, 10, 94, 32, 44, 3,
  89, 30, 27, 79, 46, 96, 27, 32, 18, 21,
  92, 69, 81, 40, 40, 34, 68, 78, 24, 87,
  42, 69, 23, 41, 78, 22, 6, 90, 99, 89,
  50, 30, 20, 1, 43, 3, 70, 95, 33, 46,
  44, 9, 69, 48, 33, 60, 65, 16, 82, 67,
  61, 32, 21, 79, 75, 75, 13, 87, 70, 33
];


// Hacker Rank solution accpeteed for all test cases to pass
function countingSort(arr) {

    let countNumbersArr = new Array(100).fill(0);

    for (let i = 0; i < arr.length; i++){
        let currVal = arr[i];
        countNumbersArr[currVal] += 1;
    }
return countNumbersArr
}

// OPTION 2
// NOTE when you have a very large data set is best to use a for loop because there is a less callback overhead 
function countingSort(arr) {
    // Write your code here
    // let size = Math.max(...arr);
    let size = arr[0];
     // Find max value for large data sets it seems that math.max(...arr) has limitations
    for (let i = 1; i < arr.length; i++) {
        let currVal = arr[i];
        if (currVal > size) {
            size = currVal;
        }
    }
    let countNumbersArr = new Array(size + 1).fill(0);
    // console.log(countNumbersArr)

    for (let i = 0; i < arr.length; i++){
        let currVal = arr[i];
        // console.log('CURRVAL', currVal)
        countNumbersArr[currVal] += 1;
    }
// console.log(countNumbersArr);
return countNumbersArr
}


console.log(countingSort(arr))
