
class Game{
    constructor(){
    //ASK ABOUT TH SET UP OF OBJECT
        this.Chiahuahuas = [
            new Chiahuahua({ charName:'Foxy', strength: 18, imgFILE: 'dog6.png' }),
            new Chiahuahua({ charName: 'Paco', strength: 18, imgFile: 'dog5.png'}),
            new Chiahuahua({charName: 'Karen', strength:13, imgFile: 'dog7.png'}),
        ];

        this.Opponents = [
            new Opponent({ charName: 'Sandy', strength: 12, imgFile: 'sandystill.jpg'}),
            new Opponent({charName: 'MoonShine', strength:17, imgFile: 'opossum.jpeg'}),
            new Opponent({charName:'Splinter', strength: 10,  imgFile: 'rat.jpeg'}),
        ];

        this.SelectedCharacter = null;
        this.SelectedEnemy = null;
        this.selectedVillan = ('?')


    }


    //why does id translate to index value
    selectChiahuahua(id) {
        this.selectedCharacter = this.Chiahuahuas[id];

    }
    //do an ajax right here under ajax



//add more to this line
//     id = (id ====  ? getRandom"?")
    selectOpponent(id){
        this.selectedOpponent = this.Opponents[getRandomInt(3)];

    }

    save() {
    }
}





// GAME = new Game();
// GAME.save();
// GAME.fetch();

class Character {
    constructor(charName, strength, imgFile ) {
        this.charName =  charName;
        this.strength = strength;
        this.imgFile = imgFile;
        this.health = 100

    }


    attack(selectedOpponent){
        selectedOpponent.takeDamage(this.strength);
    }

    takeDamage(strength){
        this.health -= strength;
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


    }






class Opponent extends Character{
    takeDamage(strength) {
        super.takeDamage(strength);
        $(document).trigger("opponent: health updated", function(){

        //does this really go here, do we need different syntax than "%"

        compHealthBar.style.width =  compHealth + "%";}
        )}


    }

//
//     fetch(){
//         var self = this;
//         $ajax('/api/game/',
//
//             'success': function(data){
//             self.selectOpponent(data.selectedOpponent)
//
// }





//where can we define random
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}