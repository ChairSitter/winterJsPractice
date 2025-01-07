const sleepIn = (weekday, vacation) => {
    return !weekday || vacation;
}

console.log('sleepIn results:');
console.log(sleepIn(true, true)); //expect true
console.log(sleepIn(true, false)); //expect false
console.log(sleepIn(false, true)); //expect true
console.log(sleepIn(false, false)); //expect true

const monkeyTrouble = (aSmile, bSmile) => {
    return (aSmile === bSmile);
}

console.log('monkeyTrouble results:');
console.log(monkeyTrouble(true, true)); //expect true
console.log(monkeyTrouble(true, false)); //expect false
console.log(monkeyTrouble(false, true)); //expect false
console.log(monkeyTrouble(false, false)); //expect 


