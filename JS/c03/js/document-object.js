var msg = '<p><b>tytuł strony: </b>'+ document.title + '<br />';
msg += '<b>adres strony: </b> ' + document.URL + '<br />';
msg += '<b>ostatnia modyfikacja: </b> ' + document.lastModified + '</p>';

var el = document.getElementById('footer');
el.innerHTML = msg;
