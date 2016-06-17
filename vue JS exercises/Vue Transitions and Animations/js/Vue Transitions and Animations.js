Vue.transition('fade',{
	enterClass:'fadeInUp',
	leaveClass: 'fadeOutLeft'
});

Vue.transition('fadeReverse',{
	enterClass:'fadeInRight',
	leaveClass: 'fadeOutLeft'
});



new Vue({
	el: 'body',
	data: {
		show: true
	}
});