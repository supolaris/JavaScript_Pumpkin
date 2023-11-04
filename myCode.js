var car = {
    name: 'bugati',
    speed: 200,
    drive: function()
    {
        return 'drive';
    }
}

var myGames = [
    'MOHA',
    'COD',
    'BTTLEFIELD'
]

var mycar = {
    name: 'bugati',
    speed: '200',
    engine: [
    {fuel: '200L'}, {hybrid: 'battery'}
    ],
    piston: {
    piston1: '1piston', 
    piston2: '2piston'
    },
    myFunction: function(){ return 'hello world';}
}

console.log( mycar.engine.fuel);