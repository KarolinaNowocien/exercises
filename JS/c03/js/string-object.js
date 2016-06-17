var saying = 'Home sweet home ';
 msg = '<h2>Liczba znaków: </h2><p>' + saying.length + '</p>';
 msg += '<h2>Duże litery: </h2><p>' + saying.toUpperCase() + '</p>';
 msg += '<h2>Małe litery: </h2><p>' + saying.toLowerCase() + '</p>';
 msg += '<h2>Znak nr 12: </h2><p>' + saying.charAt(12) + '</p>';
 msg += '<h2>Pierwsze wystąpienie ee: </h2><p>' + saying.indexOf('ee') + '</p>';
 msg += '<h2>Ostatnie wystąpienie e: </h2><p>' + saying.substring(8,14) + '</p>';
 msg += '<h2>Funkcja zastąpienie: </h2><p>' + saying.replace('me','w') + '</p>';


var el = document.getElementById('info');
el.innerHTML =msg;

