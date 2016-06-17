Vue.component('alert',{

	props: ['type'],

	template:'#alert-template',

	data: function() {
		return{
			show : true
		};
	},

	computed: {
		alertClasses: function(){

			var type = this.type;

			return{
				'Alert':true,
				'Alert--success': type=='success',
				'Alert--error': type=='error'
			}

		}
	}

});

new Vue({
	el: '#app'
})