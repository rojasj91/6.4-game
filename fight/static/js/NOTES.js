var GAME = new Game();
var yourHealthBar = document.getElementById('yourHealthBar');
var compHealthBar = document.getElementById('compHealthBar');

//PROTECTS VARIABLES FROM BEING CHANGES IN BROWSER
(function($){
        $(function(){

            var homescreen = new WelcomeScreen();
            homescreen.render();


              // You need to send a CSRF Token when POSTing
        // You do this by adding this to your project
        // https://docs.djangoproject.com/en/2.1/ref/csrf/#setting-the-token-on-the-ajax-request
        var csrftoken = $("[name=csrfmiddlewaretoken]").val();

        function csrfSafeMethod(method) {
            // these HTTP methods do not require CSRF protection
            return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
        }

        $.ajaxSetup({
            beforeSend: function (xhr, settings) {
                if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                    xhr.setRequestHeader("X-CSRFToken", csrftoken);
                }
            }
        });

        // POST ajax request to actually create the message
            $.ajax('/api/game/', {
                'method': 'POST',

                //rewqrite this line, how can we get all our data in there
                // 'data': {'text': messageUserSent},
                //maybe Game

                'success': function(data) {
                    console.log('success!');

                },

                'error': function () {
                    console.log("go back and fix it")
                }
            });




            //*****ROUTER*******

            ////ALLOWS US TO CALL THIS FUNCTION WHEN WE ACTUALLY WANT TO START OR RESTART GAME,
            // CAN ATTACH IT TO A RESTART BUTTON

            $(document).on('view:characterSelect', function(){
                var view= new CharacterSelectScreen();
               view.render();

            });


            //START THE GAME EVENT, ROUTER WILL RUN WHEN WE CALL THIS ON A BUTTON
            $(document).trigger('view:pleaseWork', function(){
                var view = new FightScreen();
                view.render();
            });


        });
  //IMPORTS JQUERY SO WE CAN USE IT
}(jQuery));