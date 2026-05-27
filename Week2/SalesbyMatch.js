/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {

    let objNums = {};

    for (let element of ar){
        objNums[element] = (objNums[element] || 0) + 1
    }

    let objValues = Object.values(objNums);
    let sockPairs = objValues.map((element) => Math.floor(element / 2));
    let totalPairs = sockPairs.reduce((acc, currVal) => acc + currVal, 0)

    return totalPairs;
};
