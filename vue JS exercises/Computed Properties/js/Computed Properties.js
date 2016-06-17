/*new Vue({
  el: 'body',

	data: {
		points:40,
	},

	computed: {
		skill: function(){
			if(this.points<=100){
				return 'Beginner';
			}
			return 'Advanced';
		}
	}

});*/

new Vue({
  el: 'body',

	data: {
		first:'Karolina',
		last:'Nowocien',
		fullName:'Karolina Nowocien'
	},

	computed: {
		fullName: function(){
			return this.first + ' ' + this.last;
		}
	}



});