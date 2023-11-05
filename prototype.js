function myContructorFunction( name, roll, depart ){
    this.stdName = name;
    this.stdRoll = roll;
    this.stdDepart = depart;
}

myContructorFunction.prototype = {
    gymnasium:  function(){return this},
    library:  function(){return "Student library one"},
    lab: function(){return "student lab one"}
}

var student1 = new myContructorFunction("James", 700, "sociology");
var student2 = new myContructorFunction("Harry", 870, "anthipology");