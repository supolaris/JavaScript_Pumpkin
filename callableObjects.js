function myFunction( myName   ) {

    return myName();
}

//console.log(myFunction( functioin() { return  "hello world"; }))

console.log(myFunction( function() { return "hello world"; } ));