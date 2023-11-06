for(var i = 1; i<=10; i++){

    for(var j = 1; j<=i; j++){

        if(i<(10/2)){
            document.write(" * ");
        }
    }

    for(var k=10; k>i; k--){

        if(i>(10/2)){
            document.write(" * ");
        }
    }
    document.write("<br>"); 
}