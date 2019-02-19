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
        this.$html = $('.app').html(html);

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

    }

    registerEvents(){
        this.$html.find('#forward-button').on('click', function (e){
            e.preventDefault();
            $(document).trigger('view:characterSelect');
        });
    }
}

/////////////////////////////
class CharacterSelectScreen extends View {
    constructor() {
        //GO GET THE CONSTRUCTOR FUNCTION THATS BUILT IN ON VIEW
        super();

        //REPLACE IN VAR SOURCE WHAT THIS.TEMPLATE_ID IS, WHICH IN THIS CASE WILL BE "welcome-screen"
        this.template_id = "pick-char-screen"
    }


    //overloaded the empty context data we declared in the class
    getContextData() {

        //can make an ajax request at this point to populate the context data
        //this will be availableChiahuahuas
        return {"chiahuahuas": GAME.Chiahuahuas};

    }


    registerEvents() {
        this.$html.find(".carousel-item_btn").on("click", function () {
            var selectedCharacter = $(this).data('id');
            GAME.selectChiahuahua(selectedCharacter);
            console.log(GAME.selectedCharacter)
        });

        this.$html.find('#rumble').on('click', function (e) {
            e.preventDefault();
            $(document).trigger('view:pleaseWork');
            // alert("views 100")
        });
    }
}


////////////////////////////////////////////////////////////////////
class FightScreen extends View {
    constructor() {
        //GO GET THE CONSTRUCTOR FUNCTION THATS BUILT IN ON VIEW
        super();

        //REPLACE IN VAR SOURCE WHAT THIS.TEMPLATE_ID IS, WHICH IN THIS CASE WILL BE "welcome-screen"
        this.template_id = "battle-mode-screen"
    }

    getContextData() {
        return {
            hero: GAME.selectedCharacter,
            villan: GAME.selectedOpponent,
        }
    }

    registerEvents() {
        this.$html.find('#attack').on("click", function (e) {
            e.preventDefault();

            (GAME.selectedCharacter).attack(GAME.selectedOpponent);
            setTimeout(function () {
                (GAME.selectedOpponent).attack(GAME.selectedCharacter);

            }, 2000);
        });

    //
        }
    }




// function healthChange() {
// 	yourHealthBar.style.width = yourHealth + "%";
// 	compHealthBar.style.width =  compHealth + "%";
// }



