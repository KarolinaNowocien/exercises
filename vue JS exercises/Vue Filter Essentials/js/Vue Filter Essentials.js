Vue.filter('role', function(value,role){
	return value.filter(function(item){
		return item.role == role;
	});

});

new Vue({
	el: 'body',

	data:{
		people:[
			{name: 'Joe', role:'admin'},
			{name: 'Mike', role:'admin'},
			{name: 'Carol', role:'student'},
			{name: 'Megan', role:'admin'}
		] 
	}
})