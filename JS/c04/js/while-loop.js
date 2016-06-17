var i =1;
var j =1;
var msg = ' ';

while (i,j <10) {
	msg += i + ' x ' + j +' = ' + (i * j) + '<br />';
	i++;
	j++;
}

document.getElementById('answer').innerHTML =  msg;