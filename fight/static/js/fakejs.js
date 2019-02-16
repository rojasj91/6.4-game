
(function($){
  $(function(){


    var welcomeScreen = document.getElementById("welcome-screen").innerHTML;
    var welcomeScreenTemplate = Handlebars.compile(welcomeScreen);

    var pickCharScreen = document.getElementById(("pick-char-screen")).innerHTML;
    var PickCharTemplate = Handlebars.compile(pickCharScreen)

    var charSelectedScreen = document.getElementById("char-selected-screen").innerHTML;
    var CharSelectedTemplate = Handlebars.compile(charSelectedScreencreen);

	var battleScreen = document.getElementById("battle-mode-screen").innerHTML;
	var BattleTemplate = Handlebars.compile(battleScreen);

	var selectedCharacter = '';
	var selectedEnemy = '';



	 class Characters {
    	constructor(context) {
        	charName = context.charName;
        	health = 100;
        	id = context.id;

        //do we need to define changed
        	attack(selectedEnemy);{
            	selectedEnemy.health = selectedEnemy.health - this.attack;
            	$(document).trigger('health:changed');
       	 		}

    		}
		}

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


	 var foxy = new Chiahuahua({ charName: 'Foxy', attack: 19, id: 1});
	 var paco = new Chiahuahua({ charName: 'Paco', attack: 18, id: 2});
	 var karen = new Chiahuahua({charName: 'Karen', attack:13, id: 3 });

	 var squirrel = new Opponent({ charName: 'Sandy', attack: 12, id: 4});
	 var opossum = new Opponent({charName: 'MoonShine', attack:17, id: 5});
	 var rat = new Opponent({charName:'Splinter', attack: 10, id: 6});

	 var available_heros = [];
	 var available_villans = [];




	 //**********************
    function displayWelcomeScreen(){
      $('.app').html(welcomeScreenTemplate());

      // Register event handler for the next button
      $('#next-button').on('click', function(e){
        e.preventDefault();
        displayNextScreen();
      });
    }

    // $.ajax('game/', {success: displayWelcomeScreen});


//***********************
    function displayPickCharScreen(){


      $('.app').html(pickCharScreenTemplate());

      $('#char-button').on('click', function(e){
        e.preventDefault();
        displayCharSelectedScreen();
      });
    }

//***********************************
    function displayCharSelectedScreen(){
      $('.app').html(welcomeScreenTemplate());

      // Register event handler for the next button
      $('#next-button').on('click', function(e){
        e.preventDefault();
        battleScreen();
      })
    }

    function gameOver() {
	if (health === 0) {
		res = 'gameOver!';
		roundResults(res);
		attackButton.disabled = true;
		// counterButton.disabled = true;
		playAgain.disabled = true;
	}
}

    // Run the program for the first time!
    displayWelcomeScreen();
  });
}(jQuery));



//index.js $('.attack-button').on('click', function(e) { if(itsMyTurn){ $(document).trigger('attack:enemy'); } });

//models.js // Declare a variable that will later store the selected character and enemy var selectedCharacter; var selectedEnemy;

 //Define a class class Character { constructor(params){ super(); this = Object.assign(this, params); }

// Give all characters an attack function

//write js function using random math module to


// is selected built in
$(document).on('character is selected', function(event, character) { selectedCharacter = character; });

$(document).on('enemy is selected', function(event, enemy) { selectedEnemy = enemy; });

$(document).on('click', function(event) { selectedCharacter.attack(selectedEnemy); });


function counter(y, c) {
	var move = Math.floor((Math.random()*5));
	if (move >= 3 && y === 'attack') {
		res = 'Computers counter was successful! You took 10 damage';
		yourHealth -= 10;
	} else if (move >= 3 && y === 'counter') {
		res = 'Your counter was successful! Comp took 10 damage';
		compHealth -= 10;
	} else if (move < 3 && y === 'attack') {
		res = 'Computer counter failed! You dealt 15 damage!';
		compHealth -= 15;
	} else if (move < 3 && y === 'counter') {
		res = 'Your counter was not successful! You were delalt 15 damage!';
		yourHealth -= 15;
	}

}






