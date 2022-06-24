//6 alien ships
//1 hero ship

//create a class to form all ships 
class Ships{
    //create constructor 1. hull 2. Fire Power 3. Accuracy
    constructor (hull, firePower, accuracy){
        this.hull = hull
        this.firePower = firePower
        this.accuracy = accuracy
    }
    //create a method for shoot
    shoot(){

    }
}
    


//extend class USSA ship 
class Hero extends Ships{
    constructor(){
        super(20, 5, 0.7)
    }
    //create a method retreat
    retreat(){

    }
}
    


//instantiate our ship
let ussAssembly = new Hero()

//create a blank array for alienships
let alienships = []

//fill the array (instantiate 6 randomize alien ships (use For Loop))
for(let i = 0; i < 6; i++){
    //create random hull value
    let hull = Math.floor(Math.random() * 4) + 3 
    // create random fire power
    let firePower = Math.floor(Math.random() * 3) + 2 
    // create random accuracy
    let accuracy = (Math.random() * 0.2) + 0.6
    // use the values to create a random alien ship
    let alienShip = new Ships(hull, firePower, accuracy)
    // push to alien space ship array
    alienships.push(alienShip)
}
  

//iterate over alien spaceships
    //iterate battle back and forth for both ships (nested loop)
    
  