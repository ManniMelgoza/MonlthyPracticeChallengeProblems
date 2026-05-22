/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

let s = '07:05:45PM';

function timeConversion(s) {
    // Write your code here
    let timePeriod = s.slice(-2)

    let time = s.slice(0, s.length - 2);

    let splitTime = time.split(":")
    console.log(splitTime)

    let hour = Number(splitTime[0]);
    console.log('HOUR', hour)

    if (timePeriod === 'AM' && hour === 12) {
        hour = 0;
        console.log('HOUR AM', hour)
    }

    if (timePeriod === 'PM' && hour !== 12) {
        hour += 12
        console.log('HOUR PM', hour)
    }

    splitTime[0] = String(hour).padStart(2, "0");
    console.log('splitTime', splitTime)

    return splitTime.join(':')
};


console.log(timeConversion(s));
