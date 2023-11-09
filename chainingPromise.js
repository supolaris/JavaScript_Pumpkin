function myPromise(handler){

    var listener;

    handler(function resolve(value){
        listener(value);

    });

    return {
        then(a){
            listener = a;

        }
    }
};

function myTwoSecond(myInput){
    return myPromise(function(resolve){
        setTimeout(function(){console.log(myInput), resolve(true)}, 2000);
    })
}


console.log(myTwoSecond("Hello").then(() => myTwoSecond("My world").then(() => myTwoSecond("iis fine"))));