var GAME = new GAME();


//PROTECTS VARIABLES FROM BEING CHANGES IN BROWSER
(function($){
        $(function(){


            //*****ROUTER*******

            ////ALLOWS US TO CALL THIS FUNCTION WHEN WE ACTUALLY WANT TO START OR RESTART GAME,
            // CAN ATTACH IT TO A RESTART BUTTON
            function startGame() {
                var view = new WelcomeScreen();
                //GO FIND THIS DIV TAG .APP AND AND PUT THE RESULT OF RENDER (CALL RENDER METHOD OF OBJECT CALLED VIEW)
                $('.app').html(view.render());
                alert("is it working?");
            }

            $(document).on('view:heroSelect', function(){
                var view= new HeroSelectScreen();
                $('.app').html(view.render());
            });


            //START THE GAME EVENT, ROUTER WILL RUN WHEN WE CALL THIS ON A BUTTON
            $(document).trigger('view:welcome');


        });
  //IMPORTS JQUERY SO WE CAN USE IT
}(jQuery));