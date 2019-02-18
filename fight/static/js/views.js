// CLASS HAS CONSTRUCTOR FUNCTIONS BUILT IN, LOOK IT UP

class View{

    render(){
        //template_id is actually set in the child classes, the different screens
        var source = document.getElementById(this.template_id).innerHTML;


        //COMPILE IT TO A TEMPLATE
        var template = Handlebars.compile(source);

        //calls the context data of the child class , will look in welcome screen etc to see if there is a
        // get context data
        var ctx = this.getContextData();
        var html =template(this.ctx);

         // INJECT THE HANDLEBARS CONTENTS INTO THIS DIV TAG, use an object in ther template()
        // example template(selectedVillan)
        this.$html = $('.app').html(template());

        this.registerEvents();

        // INJECT THE HANDLEBARS CONTENTS INTO THIS DIV TAG, use an object in ther template()
        // example template(selectedVillan)


        //RETURN THE TEMPLATE HERE
        return this.$html;
    }



    //methods that are options for all the classes inheriting from this
    getContextData(){
        return{ }
    }

    registerEvents(){
        //no operation method, does nothing but you can overload it with how to do something
    }
}

//**************END OF PARENT CLASS VIEW *********************************

//this is the controller, the scfeen we are instantiating and running
class WelcomeScreen extends View{
    constructor(){
        //GO GET THE CONSTRUCTOR FUNCTION THATS BUILT IN ON VIEW
        super();

        //REPLACE IN VAR SOURCE WHAT THIS.TEMPLATE_ID IS, WHICH IN THIS CASE WILL BE "welcome-screen"
        this.template_id = "welcome-screen";

        this.$html.find('#forward-button').on('click', function (e){
            e.preventDefault();
            $(document).trigger("view:heroSelect");
        })
    }
}


class HeroSelectScreen extends View {
    constructor() {
        //GO GET THE CONSTRUCTOR FUNCTION THATS BUILT IN ON VIEW
        super();

        //REPLACE IN VAR SOURCE WHAT THIS.TEMPLATE_ID IS, WHICH IN THIS CASE WILL BE "welcome-screen"
        this.template_id = "hero-select-screen"
    }


    //overloaded the empty context data we declared in the class
    getContextData() {

        //can make an ajax request at this point to populate the context data
        //this will be availableChiahuahuas
        return {"chiahuahuas": GAME.Chiahuahuas};

    }

    registerEvents() {
        this.$html.find("#id-of-screen-in-html-template").on("change", function () {
            var selectedHero = $(this).val();
            GAME.selectChiahuahua(selectedCharacter)
        })
    }
}

class FightScreen extends View{
    constructor(){
        //GO GET THE CONSTRUCTOR FUNCTION THATS BUILT IN ON VIEW
        super();

        //REPLACE IN VAR SOURCE WHAT THIS.TEMPLATE_ID IS, WHICH IN THIS CASE WILL BE "welcome-screen"
        this.template_id = "fight-screen"
    }

    getContextData() {
        return {
            hero: GAME.selectedCharacter,
            villan: GAME.selectedOpponent,
        }
    }
    registerEvents(){
        this.$html.find('#attack').on("click", function(e){
            e.preventDefault();



            var hero = GAME.selectedCharacter;
            var opponent = GAME.selectedEnemy;


            hero.attack(opponent);
            setTimeout(function(){
                opponent.attack(hero);

            }, 2000);
        });


    }

    // startRound(){
    //
    // }
    //
    // endRound(){
    //
    // }
    //
    // gameOver(){
    //
    // }
}


function healthChange() {
	yourHealthBar.style.width = yourHealth + "%";
	compHealthBar.style.width =  compHealth + "%";
}


/////COULD HAVE REDUCED THIS TO A SINGLE BLOCK OF CODE, NOTES ON IT IN VIEWS.JS

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
