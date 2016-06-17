(function() {
	var hotel = {
		name: 'Park',
		roomRate : 240,
		discount :15,
		offerPrice: function() {
			var offerRate = this.roomRate * ((100-this.discount)/100);
			return offerRate;
		}
	}

	var hotelName, roomRate, specialRate;

	hotelName = document.getElementById('hotelName');
	roomRate = document.getElementById('roomRate');
	specialRate = document.getElementById('specialRate');

	hotelName.textContent = hotel.name;
	roomRate.textContent = hotel.roomRate.toFixed(2) + ' zł';
	specialRate.textContent = hotel.offerPrice() + ' zł';

	var expiryMsg;
	var today;
	var elEnds;

	function offerExpires(today) {
		var weekFromToday, day, date, month, year, dayNames, monthNames;
		weekFromToday = new Date(today.getTime() + 7*24*60*60*1000);
		dayNames = ['niedzielę', 'poniedziałek', 'wtorek', 'środę', 'czwartek', 'piątek', 'sobotę'];
		monthNames = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];

		day = dayNames[weekFromToday.getDay()];
		date = weekFromToday.getDate();
		month = monthNames[weekFromToday.getMonth()];
		year = weekFromToday.getFullYear();

		expiryMsg = 'Oferta wygasa w: ';
		expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
		return expiryMsg;
	}

	today = new Date();

	elEnds = document.getElementById('offertEnds');
	elEnds.innerHTML = offerExpires(today);

}());

