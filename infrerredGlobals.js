var myHouse = {
    book: "cats got wings"
}


function myBag() {
    let a = 50;

    function myNestedBag() {

        //myNewVar is global
        myNewVar = "tested var";
        return console.log(myHouse);
    }

    myNestedBag();
}

function myNewBag(myGetVal) {
    return myGetVal;
}

myBag();
console.log(myNewBag(myNewVar));

