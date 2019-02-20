
class Game{
    constructor(){
    //ASK ABOUT TH SET UP OF OBJECT
        this.Chiahuahuas = [
            new Chiahuahua('Foxy', 18, 'dog6.png' ),
            new Chiahuahua('Paco', 18, 'dog5.png'),
            new Chiahuahua('Karen', 13, 'dog7.png'),
        ];

        this.Opponents = [
            new Opponent('Sandy', 12, 'sandystill.jpg'),
            new Opponent('MoonShine', 17, 'opossum.jpeg'),
            new Opponent('Splinter', 10,  'rat.jpeg'),
        ];

        this.selectedCharacter = null;

        this.selectOpponent()

        // console.log("selectedOpponent", this.selectedOpponent)
    }


    //id is index value
    selectChiahuahua(id) {
        this.selectedCharacter = this.Chiahuahuas[id];

    }

    selectOpponent() {
        this.selectedOpponent = this.Opponents[getRandomInt(3)];


        console.log("selectedOpponent", this.selectedOpponent)


        //do an ajax right here under ajax

        // if (id === '?' ) {
        //     id = getRandomInt(3)
        // }


    }


//add more to this line
    //how i would write it with python logic, cant figure out how to modify for js

//         id = selectedOpponent.getRandom;
//     }else{
//         id = id}

 /////// figure out how to use conditional ternary operator here for random id



    // save() {
    // }
}




//use these
// GAME = new Game();  ***used in notes.js
// GAME.save();
// GAME.fetch();  **will use in the chihuahua and opponent classes

class Character {
    constructor(charName, strength, imgFile ) {
        this.charName =  charName;
        this.strength = strength;
        this.imgFile = imgFile;
        this.health = 100

    }


   takeDamage(strength){
       this.health -= strength;

    }

    attack(){
        // (this.selectedOpponent).takeDamage(this.strength);
    }



}

class Chiahuahua extends Character {
    // constructor() {
    super(takeDamage, attack) {
        takeDamage(strength);
        {
            super.takeDamage(strength);
            //updates the span tag by ids- this line was changed per dans notes in lecture
            $(document).trigger("Chiahuahua: health updated", [this.health]
                //
                // function () {
                //
                //     //does this really go here, do we need different syntax than "%"
                //     yourHealthBar.style.width = yourHealth + "%";}
            )
        }


        attack();
        {
            //it is not recognizing take damage, not sure if it needs to be GAME.takeDamage
            (this.selectedOpponent).takeDamage(this.strength);

        }


    }

}





class Opponent extends Character{
    super(takeDamage, attack) {
        takeDamage(strength);
        {
            super.takeDamage(strength);
            $(document).on("opponent: health updated", function () {

                    //does this really go here, do we need different syntax than "%"

                    // compHealthBar.style.width = compHealth + "%";
                }
            )
        }

        attack()
        {
            (this.selectedCharacter).takeDamage(this.strength);

            (document).on("enemy:health", function(e, newValue){
                "enemy:health".text(newValue)
            })
        }

        }
    }


//     fetch(){
//         var self = this;
//         $ajax('/api/game/',
//
//             'success': function(data){
//             self.selectOpponent(data.selectedOpponent)
//






//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}