var msg;
var level = Math.floor((Math.random()*3) +1);

switch (level) {
	case 1:
	msg = "Powodzenia na pierwszym teście!"
	break;

	case 2:
	msg = "Już drugi z trzech!"
	break;

	case 3:
	msg = "Już prawie koniec!"
	break;

	default:
	msg = 'Powodzenia!'
	break;
}

var el = document.getElementById('answer');
el.textContent = 'Twój wynik: ' + msg;