function myTimeFunction(){

    var myTimeVar = setTimeout(theTimer, 3000);
    
}

function theTimer(){
    console.log("Hello world");
}

myTimeFunction();