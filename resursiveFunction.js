//the factorical

function myRecursive(n){
    if( n ==1 || n == 0)
        return 1
    else
        return n * myRecursive(n-1)
}

var input = prompt("Enter you factorial number: ");

console.log(myRecursive(input));