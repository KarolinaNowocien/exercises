var msg = '<h2>okno przeglądarki</h2><p>szerokość: '+ window.innerWidth + '</p>';
msg += '<p>wysokość: ' +window.innerHeight + '</p>';
msg += '<h2>historia</h2><p>elementy: ' +window.history.length +'</p>';
msg += '<h2>ekran</h2><p>szerokość: ' +window.screen.width +'</p>';
msg += '<p>wysokość: ' +window.screen.height +'</p>';

var el = document.getElementById('info');
el.innerHTML = msg;
alert('Bieżąca strona: '+ window.location);