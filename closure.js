function myFirstFunction(x){
    return function(y){
        return x + y
    }
}

var myVariable = myFirstFunction(5);
console.log(myVariable(4));

console.log(myFirstFunction(4)(4));