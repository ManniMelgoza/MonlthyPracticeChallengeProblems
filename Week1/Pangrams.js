

// let s = 'We promptly judged antique ivory buckles for the next prize';
let s = 'We promptly judged antique ivory buckles for the prize'
/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // Write your code here
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetSet = new Set(s.toLowerCase());

    for (let element of alphabet){
        if (!alphabetSet.has(element)){
            return 'no pangram'
        }
    };

return 'pangram';

};




console.log(pangrams(s))
