var myKey = {
    maker: 'james',
    characteristics: {
        metal: [
            "iron",
            "brass"
        ]
    }
}


function myClosureFunction() {
    var myNum = 100;

    function myNestedFunction( myPramVal ) {
        var myNum2 = myPramVal + 20;
        return myNum2;
    }


    console.log(myNestedFunction(30));
    console.log(myNestedFunction(40));

}

myClosureFunction();