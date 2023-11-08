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

async function myCountdown(myNum = 5){

    var mySecond = 1;
    for(let i = myNum; i >= 0; i--){
        var myNum = 1;
        console.log("The second", mySecond);
        await myTwoSecond();
        mySecond = mySecond + 1;
    }

}