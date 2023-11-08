/*function myPromise(myHandlerVal){

    var myWordAccepter;

    return {
        then (myThenVal) {
            myThenVal = 10;
            myWordAccepter = myThenVal;
            console.log(myWordAccepter);
        }
    }
}*/


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

myPromise(function(resolve){
    setTimeout(function(){resolve(true)}, 2000);
}).then(value => console.log("The value is: ", value));
