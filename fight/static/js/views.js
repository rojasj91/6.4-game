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
        this.$html = $('<div>').html(template());

        this.registerEvents();

        // INJECT THE HANDLEBARS CONTENTS INTO THIS DIV TAG, use an object in ther template()
        // example template(selectedVillan)


        //RETURN THE TEMPLATE HERE
        return this.$html;
    }



    //methods that are options for all the classes inheriting from this
    getContextData(){
        return{ some object }
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
        this.template_id = "welcome-screen"

        this.$htmk.find(#forward-button).on('click', function (e){
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

}
    //overloaded the empty context data we declared in the class
    getContextData(){

    //can make an ajax request at this point to populate the context data
    //this will be availableChiahuahuas
        return { "chiahuahuas": GAME.Chiahuahuas};

}

    registerEvents(){
     this.$htmll.find("#id-of-screen-in-html-template").on("chaqnge", function(){
         var selectedHero = $(this).val();
         GAME.selectHero
     })
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
        this.$html.find(#idforattackbuton).on("click", function(e){
            e.preventDefault()



            var hero = GAME.selectedCharacter;
            var opponent = GAME.selectedEnemy;


            hero.attack(opponent);
            setTimeout(function(){
                opponent.attack(hero);

            })
        })
    }

    startRound(){

    }

    endRound(){

    }

    gameOver(){

    }
}