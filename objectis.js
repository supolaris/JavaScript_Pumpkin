console.log(Object.is(1,1));
console.log(Object.is(NaN, NaN));
console.log(Object.is('2', 2));
var myObjt = {}
console.log(Object.is(myObjt, {}));
console.log(Object.is(myObjt, myObjt));


if('1'===1){
    console.log('same');
}
else{
    console.log("not same");
}