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
console.log(monkeyTrouble(false, false)); //expect true

const sumDouble = (a, b) => {
    if(a === b) return (a + b) *2;
    else return a + b;
}

const diff21 = (n) => {
    if(n < 21){
      return 21-n;
    } else {
      return (n - 21) *2;
    }
}

const parrotTrouble = (talking, hour) => {
    return talking && ((hour < 7) || (hour > 20))
}




