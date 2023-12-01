var sample = {
    name: "james",

}

var myObj= {
    myFunction: ()=> {
        alert("Hello world");
    }
}


sample.__proto__ = myObj

sample.myFunction();