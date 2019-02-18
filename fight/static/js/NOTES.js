var GAME = new Game();
var yourHealthBar = document.getElementById('yourHealthBar');
var compHealthBar = document.getElementById('compHealthBar');

//PROTECTS VARIABLES FROM BEING CHANGES IN BROWSER
(function($){
        $(function(){



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