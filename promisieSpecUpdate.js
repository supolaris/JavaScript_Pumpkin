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


function myTwoSecond(){
    return myPromise(function(resolve){
        setTimeout(function(){resolve(true)}, 2000);
    })
}


//myTwoSecond().then( () => {"Two Seconds Passed"});