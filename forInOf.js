var myIntArray = [1,9,3,4,5,6,7];
var myString = "Hello World";

for (let x in myIntArray){
    console.log("for in " + myIntArray[x]);
}

console.log("\n");

for (let x of myString){
    console.log("for of " + x);
}