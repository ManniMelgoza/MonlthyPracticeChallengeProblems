/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 *
 * Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.

Example



Lily wants to find segments summing to Ron's birth day,  with a length equalling his birth month, . In this case, there are two segments meeting her criteria:  and .

Function Description

Complete the birthday function in the editor below.

birthday has the following parameter(s):

int s[n]: the numbers on each of the squares of chocolate
int d: Ron's birth day
int m: Ron's birth month
Returns

int: the number of ways the bar can be divided
Input Format

The first line contains an integer , the number of squares in the chocolate bar.
The second line contains  space-separated integers , the numbers on the chocolate squares where .
The third line contains two space-separated integers,  and , Ron's birth day and his birth month.

Constraints

, where ()
 *

 */
let d = 3;
let m = 2;
let s = [ 1, 2, 1, 3, 2 ];


function birthday(s, d, m) {
    // Tracks how many valid segments match the conditions
    let divChocolateCount = 0;

    // Outer loop controls the starting index of each segment
    // We use <= because the LAST valid starting index must still be checked
    for (let i = 0; i <= s.length - m; i++) {

        // Stores the total for the current segment/window
        let sum = 0;

        // Inner loop builds a segment of length m
        // starting from the current index i
        for (let j = i; j < i + m; j++) {

            // Add each value in the segment to the sum
            sum += s[j];
        }

        // If the segment sum matches d,
        // we found a valid way to divide the chocolate
        if (sum === d) {
            divChocolateCount++;
        }
    }

    // Return total valid segments
    return divChocolateCount;
}



console.log(birthday(s,d,m))
