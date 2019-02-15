var selectedCharacter = 'user selected character'
var selectedEnemy = 'randomly chosen enemy character'

class Characters {
    constructor(context) {
        charName = context.charName;
        health = 100;
        id = context.id


        attack(selectedEnemy){
            selectedEnemy.health = selectedEnemy.health - this.attack;
            $(document).trigger('health:changed');
        }

         counter(selectedCharacter){
            selectedCharacter.health = selectedCharacter.health - this.counter;
            $(document).trigger('health:changed');
        }
    }
};


class Chiahuahua extends Characters {
    constructor(context) {
        super(context);

    }

}

class Opponent extends Characters {
    constructor(context) {
        super(context);


    }

}


// id for each each character, will use random math onl;y for char 4-6 to choose enemy
// what health is really doing in object
var foxy = new Chiahuahua({ charName: 'Foxy', health: '', attack: 19, id: 1});
var paco = new Chiahuahua({ charName: 'Paco', health: '', attack: 18, id: 2});
var karen = new Chiahuahua({charName: 'Karen', health: '', attack:13, id: 3 });

var squirrel = new Opponent({ charName: 'Sandy', health: '', attack: 12, id: 4});
var opossum = new Opponent({charName: 'MoonShine', health: '', attack:17, id: 5});
var rat = new Opponent({charName:'Splinter', health: '', attack: 10, id: 6});

//index.js $('.attack-button').on('click', function(e) { if(itsMyTurn){ $(document).trigger('attack:enemy'); } });

//models.js // Declare a variable that will later store the selected character and enemy var selectedCharacter; var selectedEnemy;

 //Define a class class Character { constructor(params){ super(); this = Object.assign(this, params); }

// Give all characters an attack function





$(document).on('character:selected', function(event, character) { selectedCharacter = character; });

$(document).on('enemy:selected', function(event, enemy) { selectedEnemy = enemy; });

$(document).on('attack:enemy', function(event) { selectedCharacter.attack(selectedEnemy); });