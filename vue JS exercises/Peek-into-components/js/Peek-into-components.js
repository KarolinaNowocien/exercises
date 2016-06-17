/* ************global component**************
Vue.component('counter', {
	template: '#counter-template',

	props: ['subject'],

	data: function(){
		return { count : 0 };
	}
}); */



new Vue({
  el: '#app',
  components :{
  	counter:{
	template: '#counter-template',

	props: ['subject'],

	data: function(){
		return { count : 0 };
	}
}
  }

})