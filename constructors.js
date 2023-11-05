 function myCar( name, engine, speed, windowTint, metallicColor , exhaust ){
    this.myCarName = name;
    this.myCarEngine = engine;
    this.myCarSpeed = speed;
    this.myCarWiindowTint = windowTint;
    this.myCarMetallicColor = metallicColor;
    this.myCarExhaust = exhaust;
 }


 var myCarOneDetails = new myCar( "audi", "9000hs", "350km", "shaded", true, 3 );
 var myCarTwoDetails = new myCar( "bmw", "6000hs", "250km", "faded", true, 2 );
 var myCarThreeDetails = new myCar( "audi", "3000hs", "150km", "melted", true, 1 );