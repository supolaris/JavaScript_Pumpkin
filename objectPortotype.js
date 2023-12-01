var sample = {
    name: "james",

}

var myObj= {
    myFunction: ()=> {
        alert("Hello world");
    }
}

myObj.__proto__ = {
    newfuntion(){
        return "peter";
    }
}


sample.__proto__ = myObj

sample.myFunction();
console.log(sample.newfuntion());