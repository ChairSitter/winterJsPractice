const sleepIn = (weekday, vacation) => {
    return !weekday || vacation;
}

console.log('sleepIn results:')
console.log(sleepIn(true, true)); //expect true
console.log(sleepIn(true, false)); //expect false
console.log(sleepIn(false, true)); //expect true
console.log(sleepIn(false, false)); //expect true

