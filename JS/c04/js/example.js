var table =3;
var operator ='addition';
var i = 1;
var msg = ' ';

/*If/else is just for practice - while loop is enough to get the result*/
if (operator ==='addition') {
	while (i<11){
		msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
		i++;
	}
}else{
	while (i>11){
		msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
		i++;
}
}

document.getElementById('blackboard').innerHTML =  msg;