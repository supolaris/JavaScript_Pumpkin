var myVarWord = 'This is var word';
let myLetWord = 'This is let word';
const myConstWord = 'This is const word';




if (true) {
    var mySecondVarWord = 'This is var word'; //var is free roamed
    let mySecondLetWord = 'This is let word'; //let is not accessed outside the scope
    const mySecondConstWord = 'This is const word'; //const is not accessed out the scope and we can not change it.
}