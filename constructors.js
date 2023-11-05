 function myCar( name, engine, speed, windowTint, metallicColor , exhaust, myDrive = function(){ return "My Fuled Cars"} ){
    this.myCarName = name;
    this.myCarEngine = engine;
    this.myCarSpeed = speed;
    this.myCarWiindowTint = windowTint;
    this.myCarMetallicColor = metallicColor;
    this.myCarExhaust = exhaust;
    this.myCarDrive = myDrive;
 }


 var myCarOneDetails = new myCar( "audi", "9000hs", "350km", "shaded", true, 3, );
