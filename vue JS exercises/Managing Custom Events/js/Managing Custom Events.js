Vue.component('message', {
	template: '<input v-model="message" @keyup.enter="storeMessage">',

	data: function(){
		return {message: ''};
	},

	methods: {
		storeMessage: function(){
			console.log('Stored ' +'"'+ this.message +'"');

			this.message = '';
		}
	}

});

new Vue({
	el: 'body'
});