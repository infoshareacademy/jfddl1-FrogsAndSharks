$(document).ready(function(){
    $allPoints = 0;
    $allLives = 3;
    var audio = new Audio('music/music.mp3');
    $time = 2000;

    //Główne menu z przyciskami//
    $( "#play" ).click(function() {
        $('#menu').hide();
        $('#main').show();
        audio.play();
        startGame();

    });
    $( "#playAgain" ).click(function() {
        $('#gameOverScreen').hide();
        $('#main').show();
        audio.play();
        startGame();

    });
    $( "#backToMenu" ).click(function() {
        $('#gameOverScreen').hide();
        $('#menu').show();

    });
    /**
     * Created by Asus on 2017-05-05.
     */
    //setInterwal odpowiada za wykonywanie funkcji co sekunde
    function startGame(){setInterval
    (function game() {
        //tworze diva o klasie goodFood i przypisuje go do diva glownego/ SPADAJACE JEDZENIE
        $randomDiv = Math.floor(Math.random() * 100);
        if ($randomDiv <= 10) {
            var $foodItem = $('<div id="goodFood"><img src="img/carrot.png"></div>');
            $('#main').append($foodItem);
        } else if ($randomDiv > 10 && $randomDiv <= 20) {
            var $foodItem = $('<div id="goodFood"><img src="img/apple.png"></div>');
            $('#main').append($foodItem);
        } else if ($randomDiv > 20 && $randomDiv <= 30) {
            var $foodItem = $('<div id="goodFood"><img src="img/brocly.png"></div>');
            $('#main').append($foodItem);
        } else if ($randomDiv > 30 && $randomDiv <= 40) {
            var $foodItem = $('<div id="goodFood"><img src="img/fish.png"></div>');
            $('#main').append($foodItem);
        } else if ($randomDiv > 40 && $randomDiv <= 50) {
            var $foodItem = $('<div id="goodFood"><img src="img/banana.png"></div>');
            $('#main').append($foodItem);
        } else if ($randomDiv > 50 && $randomDiv <= 60) {
            var $foodItem = $('<div id="goodFood"><img src="img/avokado.png"></div>');
            $('#main').append($foodItem);
        } else if ($randomDiv > 60 && $randomDiv <= 70) {
            var $foodItem = $('<div id="badFood"><img src="img/burger.png"></div>');
            $('#main').append($foodItem);
        } else if ($randomDiv > 70 && $randomDiv <= 80) {
            var $foodItem = $('<div id="badFood"><img src="img/donout.png"></div>');
            $('#main').append($foodItem);
        } else if ($randomDiv > 80 && $randomDiv <= 90) {
            var $foodItem = $('<div id="badFood"><img src="img/candy.png"></div>');
            $('#main').append($foodItem);
        }
        else {
            var $foodItem = $('<div id="badFood"><img src="img/pizza.png"></div>');
            $('#main').append($foodItem);
        }
        //odczytuje szerokosc diva glownego
        $foodX = Math.floor(Math.random() * 565);
        $($foodItem).css({'left': $foodX});
        animate($foodItem.get(0), 10);
        function animate(element, speed) {
            var top = 0;
            var id = setInterval(function () {
                top++;
                element.style.top = top + 'px';
                checkOverlay(element, id);
                if (top > 560) {
                    clearInterval(id);
                    element.remove();
                    checkOverla(element, id);

                }
            }, speed)
        }

        $idCheck = $foodItem.attr('id');//zmienna odczytująca id

        function checkOverlay(element, interval) {
            var playerLeft = parseInt($('#player').css('left'));
            var playerRight = playerLeft + 60;
            if (element.style.top.replace('px', '') > 500 && playerLeft < element.style.left.replace('px', '') && element.style.left.replace('px', '') < playerRight) {
                element.remove();
                clearInterval(interval);
                checkPoints(element);



            }
        }

        function checkOverla(element) {

            if (element.id == 'goodFood' && element.style.top.replace('px', '') > 500) {
                $allLives -= 1;
                $('#lives-container img').last().remove();
                gameOver();

            }
        }

        function checkPoints(element) {
            if (element.id == 'goodFood') {
                scoreUp();
            } else {
                scoreDown();
            }
        }


        function scoreUp() {
            $allPoints += 10;
            console.log('Score up! Actual score is - ', $allPoints);
            $('#points').text($allPoints);
        }

        function scoreDown() {
            $allPoints -= 100;
            console.log('Score down! Actual score is - ', $allPoints);
            $('#points').text($allPoints);

        }


        function gameOver() {
            if ( $allPoints < 0 || $allLives <= 0) {
                $('#main').hide();
                $('#gameOverScreen').show();
                audio.pause();

            }
        }



    }, $time);

    };



    var player = {};
    player.x = $('#main').width() / 2;
    player.y = 500;
    $(document).on('keydown', handleTyping);
    function handleTyping(event) {
        switch(event.which) {
            case 39:
                if (player.x > 530) {
                    $('#player').css({
                        'left': (player.x += 0) + 'px'
                    });
                }else {
                    $('#player').css({
                        'left': (player.x += 15) + 'px'
                    })};
                break;
            case 37:
                if (player.x < 7) {
                    $('#player').css({
                        'left': (player.x -= 0) + 'px'
                    });
                }else {
                    $('#player').css({
                        'left': (player.x -= 15) + 'px'
                    })};
                break;
        }
    }
});