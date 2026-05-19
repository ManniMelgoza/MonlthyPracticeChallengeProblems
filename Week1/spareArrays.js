/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

let strings = [ 'aba', 'baba', 'aba', 'xzxb' ];
let queries = [ 'aba', 'xzxb', 'ab' ];



function matchingStrings(strings, queries) {
    // Write your code here
    // console.log ('length', strings.length, queries.length)\
    let stringLength = strings.length;
    let queriesLength = queries.length;

    let commonStringCount = [];
    let index = 0;

    while( index < queriesLength){
        let currQuerie = queries[index];
        // console.log('Curr QUERIE VAL CHECK OUTER LOOP: ', currQuerie)

        let innerIndex = 0;
        let currCount = 0;

        while (innerIndex < stringLength) {
        let currString = strings[innerIndex];
        // console.log('CURR QUERIE CHEKCER', currQueries)
            if (currString === currQuerie) {
                    currCount++
                    // console.log('CURR COUNT INSIDE IF', currCount)
            }
            innerIndex++
        }
        // console.log('COUNT ARR', commonStringCount)
        commonStringCount.push(currCount)
        index++
        // console.log('CURR COUNT AFTER INDEX INCREASE', currCount)
    // stringCounter = 0;
        // console.log(currCount)
    }
        return commonStringCount;
};


console.log(matchingStrings(strings, queries))


/*

Refactor code

fucntion matchingStrings(strings, queries) {

    let countResults = [];

    for (let i = 0; i < queries.length; i++){

        let currQuery = queries[i];
        let count = 0;

        for (let j = j < string.length; j++){
            let currString = strings[j];
            if (currString === currQuery) {
                count++;
            }
        }
    countResults.push(count);
    }
return countResults;
};


*/
