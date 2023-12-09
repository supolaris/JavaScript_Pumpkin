let myCount = 0;
var myIntervalId = setInterval(() => {
    console.log("Hello world");
    myCount ++;

    if(myCount == 5){
        console.log("You have reached your count limit");
        clearInterval(myIntervalId);
    }

}, 3000)


myIntervalId;