var score1 = 90;
var score2 = 95;
var msg;

var highScore1 = 75;
var highScore2 = 95;
var comparison = (score1 + score2) > (highScore1 + highScore2)


if (comparison = true){
	msg = 'Gratulacje, zaliczyłeś test!';
} else {
	msg = "Spróbuj ponwnie!"
}

var el = document.getElementById('answer');
el.textContent = 'Twój wynik: ' + msg;