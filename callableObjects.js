function myFunction( fullname ){

    return console.log(fullname.firstname + " " + fullname.secondname);
}

myFunction({firstname: 'hello', secondname: 'world'});