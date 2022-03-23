// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let result = [];
    
    // Write your code here
    // Write your code here
    const hours = s.slice(0,2);
    const timeWithoutEnding = s.slice(0,-2);
    const timeWithoutHoursAndEnding = s.slice(2, -2)
    // For 12 AM
    if(s[8] === "A" && hours === "12") {
        return "00" + timeWithoutHoursAndEnding;
    }
    // For 12 Pm or any Am time other than 12 Am
    if(hours === "12" || s[8] === "A") {
        return timeWithoutEnding;   
    }
    // for all other Pm times
    return (parseInt(hours) + 12) + timeWithoutHoursAndEnding;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
