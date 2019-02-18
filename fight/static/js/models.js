class Game{
    constructor(){

        this.Chiahuahuas = [
            new Chiahuahua({ charName: 'Foxy', attack: 19, imgFile: 'dog6.png' });
            new Chiahuahua({ charName: 'Paco', attack: 18, imgFile: 'dog5.png'});
            new Chiahuahua({charName: 'Karen', attack:13, imgFile: 'dog7.png'});
        ]

        this.Opponent = [
            new Opponent({ charName: 'Sandy', attack: 12, imgFile: 'sandystill.jpg'});
            new Opponent({charName: 'MoonShine', attack:17, imgFile: 'opossum.jpeg'});
            new Opponent({charName:'Splinter', attack: 10,  imgFile: 'rat.jpeg'});
        ]

        this.SelectedCharacter = null;
        this.SelectedEnemy = null;
        this.selectedVillan = ('?')
    }

    selectChiahuahua(id) {
        this.selectedHero = this.heros[id];
    }
    //do an ajax right here under ajax

    selectVillan(id){
        this.selectedVillan = random();

    }
}


GAME = new Game();
GAME.save();
GAME.fetch();

class Character {
    constructor(context) {
        this.charName = context.charName;
        this.attack = null;
        this.imgFile = context.imgFile;
        this.health = 100

    }

    attack(Opponent){
        opponent.takeDamage(this.strength);
    }

    takeDamage(hit){
        this.health -= hit;
    }


}

class Chiahuahua extends Character{
    takeDamage(hit) {
        super.takeDamage(hit);
        $(document).trigger("hero: health updated")


		}

}

class Opponent extends Character{
    constructor(context) {
			super(context);

		}

}