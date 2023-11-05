var myObj = {
    myWord: "this",
    embed: {
        embedded: true,
        myFun: function(){
            return this;
        }
    }
}

var myArray = [
    "this",
    function(){
        return this;
    }
]

function myThisFunction(){
    function mySubThisFunction(){
        return this;
    }
    new mySubThisFunction();
}


function myFunction(){

    console.log("from global", this);

    function sub(){
        console.log("from sub", this);
    }

    sub();

}

new myFunction();
//myFunction.call(this);
//console.log(new myFunction.call(this));