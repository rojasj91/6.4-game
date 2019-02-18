// import anime from 'lib/anime.es.js';

(function($){
  $(function(){

  	console.log('Lets Get Ready To Rumble !');

        // You need to send a CSRF Token when POSTing
        // You do this by adding this to your project
        // https://docs.djangoproject.com/en/2.1/ref/csrf/#setting-the-token-on-the-ajax-request
        var csrftoken = $("[name=csrfmiddlewaretoken]").val();

        function csrfSafeMethod(method) {
            // these HTTP methods do not require CSRF protection
            return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
        }


        // $('.display-4').css("background-color","yellow");
         $.ajaxSetup({
            beforeSend: function (xhr, settings) {
                if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                    xhr.setRequestHeader("X-CSRFToken", csrftoken);
                }
            }
        });

         $('.carousel-item').on('submit', function (event) {
            var CharacterUserSent = $({id}).val();
            event.preventDefault();
            console.log('selected player');
            console.log("charcter user sent", CharacterUserSent);

            // POST ajax request to actually create the message
            $.ajax('/game/', {
                'method': 'POST',
                'data': {'text': CharacterUserSent},

                'success': function (data) {
                    $('carousel-item').val('');


                    console.log('success!');
                    CharacterUserSent(data);

                },
                'error': function () {
                    console.log("go back and fix it")
                }
            });
        });


    var welcomeScreen = document.getElementById("welcome-screen").innerHTML;
    var welcomeScreenTemplate = Handlebars.compile(welcomeScreen);

    var pickCharScreen = document.getElementById(("pick-char-screen")).innerHTML;
    var PickCharTemplate = Handlebars.compile(pickCharScreen)

    var charSelectedScreen = document.getElementById("char-selected-screen").innerHTML;
    var CharSelectedTemplate = Handlebars.compile(charSelectedScreen);

	var battleScreen = document.getElementById("battle-mode-screen").innerHTML;
	var BattleTemplate = Handlebars.compile(battleScreen);

	var characterCarousel=document.getElementById("pick-char-screen").innerHTML;
    var carouselScreenTemplate = Handlebars.compile(characterCarousel);

	// var health = document.getElementById("health")
	//
	// setInterval(function(){
	//   health.value = Math.random() * 100;
	// }, 1000);


	// selectCharacter=$("d-block").on("click", function(e){
	// 		e.preventDefault()
	// 		$(this).select();
	// 		});




	 class Characters{
    	constructor(context){
        	 this.charName = context.charName;
        	 this.health = 100;
        	 this.id = context.id;
        	 this.imgFile = context.imgFile;

        // do we need to define changed
        // 	this.attack (function{
        //     	selectedEnemy.health = selectedEnemy.health - this.attack;
        //     	$(document).trigger('health:changed');
       	//  		});
		//
    		}
		}

	 class Chiahuahua extends Characters {
		constructor(context) {
			super(context);

		}

		select(){
		 	$(carouselScreenTemplate).on('click', {Chiahuahua:select});
		 	selectedCharacter = characterId;

			console.log("select method has been called")


		 }

	  		// var selectedCharacter = document.getElementById('carousel-holder').value;
	  		// var displayedCharacter = document.getElementById('selection').innerHTML;
	  		// return(displayedCharacter);

	 }

	 class Opponent extends Characters {
		constructor(context) {
			super(context);

		}

	 }


	 var foxy = new Chiahuahua({ charName: 'Foxy', attack: 19, id: 1, imgFile: 'dog6.png' });
	 // console.log(foxy);
	 var paco = new Chiahuahua({ charName: 'Paco', attack: 18, id: 2, imgFile: 'dog5.png'});
	 // console.log(paco);
	 var karen = new Chiahuahua({charName: 'Karen', attack:13, id: 3, imgFile: 'dog7.png'});
	 // console.log(karen);

	 var squirrel = new Opponent({ charName: 'Sandy', attack: 12, id: 4, imgFile: 'sandystill.jpg'});
	 // console.log(squirrel);
	 var opossum = new Opponent({charName: 'MoonShine', attack:17, id: 5, imgFile: 'opossum.jpeg'});
	 // console.log(oposum)
	 var rat = new Opponent({charName:'Splinter', attack: 10, id: 6, imgFile: 'rat.jpeg'});
	 // console.log(rat);

	  var characterId = $(this).data('id');

     var availableHeros = [{foxy}, {paco}, {karen}];
     var availableVillains = [{squirrel}, {opossum}, {rat}];

      selectedCharacter = {foxy};
	// var selectedCharacter= function selectCharacter(){
    //      document.getElementById('carousel-holder').value;
    //       document.getElementById('selection').innerHTML;
    //      return(selectedCharacter);
     //}

	  // $(".carousel-item").on("click", function(e){
		// 	// e.preventDefault()
		// 	$(this).select();
	  //
		// 	});


        //write method to bring in player's selection
	var selectedEnemy = availableVillains[Math.floor(Math.random() * availableVillains.length)];
        console.log("selected enemy", selectedEnemy);



	 //**********************
    function displayWelcomeScreen(){
      $('.app').html(welcomeScreenTemplate());

      // Register event handler for the next button
      $('#forward-button').on('click', function(e){
        e.preventDefault();
        displayPickCharScreen();
      });

	  // $(anime.timeline({loop: true}))
		//   .add({
		// 	targets: '.ml15 .word',
		// 	scale: [14,1],
		// 	opacity: [0,1],
		// 	easing: "easeOutCirc",
		// 	duration: 800,
		// 	delay: function(el, i) {
		// 	  return 800 * i;
		// 	}
		//   }).add({
		// 	targets: '.ml15',
		// 	opacity: 0,
		// 	duration: 1000,
		// 	easing: "easeOutExpo",
		// 	delay: 1000
	  // });
    }

    // $.ajax('game/', {success: displayWelcomeScreen});


//***********************
    function displayPickCharScreen(){


      $('.app').html(PickCharTemplate());

      $('#forward-button').on('click', function(e){
        e.preventDefault();
        displayCharSelectedScreen();
      });
    }

//***********************************
    function displayCharSelectedScreen(){
      $('.app').html(CharSelectedTemplate());

      // Register event handler for the next button

      $('#forward-button').on('click', function(e){
        e.preventDefault();
        // $(document).on('character is selected', function(event, character) { selectedCharacter = character; });
        displayBattleScreen();
      })
    }

    function displayBattleScreen(){
    	$('.app').html(BattleTemplate);

		$('.attack').on('click', function(e){
    		e.preventDefault();
			selectedEnemy.health = (selectedEnemy.health - this.attack);
            	$(document).trigger('health:changed');
            	console.log(selectedEnemy.health)


		})


	}

	// need to add event listener to make this function check the value of health
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
    // $.ajax('game/', {success: displayWelcomeScreen});
  });
}(jQuery));



//index.js $('.attack-button').on('click', function(e) { if(itsMyTurn){ $(document).trigger('attack:enemy'); } });

//models.js // Declare a variable that will later store the selected character and enemy var selectedCharacter; var selectedEnemy;

 //Define a class class Character { constructor(params){ super(); this = Object.assign(this, params); }

// Give all characters an attack function




// // is selected built in
// $(document).on('character is selected', function(event, character) { selectedCharacter = character; });
//
// $(document).on('enemy is selected', function(event, enemy) { selectedEnemy = enemy; });
//
// $(document).on('click', function(event) { selectedCharacter.attack(selectedEnemy); });
//
//
// function counter(y, c) {
// 	var move = Math.floor((Math.random()*5));
// 	if (move >= 3 && y === 'attack') {
// 		res = 'Computers counter was successful! You took 10 damage';
// 		yourHealth -= 10;
// 	} else if (move >= 3 && y === 'counter') {
// 		res = 'Your counter was successful! Comp took 10 damage';
// 		compHealth -= 10;
// 	} else if (move < 3 && y === 'attack') {
// 		res = 'Computer counter failed! You dealt 15 damage!';
// 		compHealth -= 15;
// 	} else if (move < 3 && y === 'counter') {
// 		res = 'Your counter was not successful! You were delalt 15 damage!';
// 		yourHealth -= 15;
// 	}
//
// }







