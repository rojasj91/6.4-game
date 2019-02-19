
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

        this.selectedOpponent = ('?');
        // this.selectedOpponent = (this.Opponents[1]);



    }


    //id is index value
    selectChiahuahua(id) {
        this.selectedCharacter = this.Chiahuahuas[id];



    // selectOpponent(id);
    //         // this.selectedOpponent = this.Opponents[getRandomInt(3)];
    //         this.selectedOpponent= (id ? (this.Opponents.getRandomInt(max3)) : (id));

        console.log("selectedOpponent", this.selectedOpponent)

    }
    //do an ajax right here under ajax





//add more to this line
    //how i would write it with python logic, cant figure out how to modify for js
//     if (id ===='?' ) {
//         id = selectedOpponent.getRandom;
//     }else{
//         id = id
//
//     }

 /////// figure out how to use conditional ternary operator here for random id


    // selectOpponent(id){
    //
    //     // this.selectedOpponent = this.Opponents[getRandomInt(3)];
    //     this.selectedOpponent= (id ? (Opponents.getRandomInt(max3)) : (id));
    // }

    save() {
    }
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
    // constructor(context) {
    //     super(context);
        takeDamage(strength){
            super.takeDamage(strength);
            $(document).trigger("Chiahuahua: health updated", function () {

                    //does this really go here, do we need different syntax than "%"
                    yourHealthBar.style.width = yourHealth + "%";}
                )}

        attack(){
        (this.selectedOpponent).takeDamage(this.strength);
    }


    }







class Opponent extends Character{
    takeDamage(strength) {
        super.takeDamage(strength);
        $(document).on("opponent: health updated", function(){

        //does this really go here, do we need different syntax than "%"

        compHealthBar.style.width =  compHealth + "%";}
        )}

         attack(){
        (this.selectedCharacter).takeDamage(this.strength);
    }


    }


//     fetch(){
//         var self = this;
//         $ajax('/api/game/',
//
//             'success': function(data){
//             self.selectOpponent(data.selectedOpponent)
//
// }





//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}