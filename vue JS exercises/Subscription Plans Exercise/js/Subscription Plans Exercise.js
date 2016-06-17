new Vue({
  el: '#app',

	data: {
		plans: [
			{ name: 'Enterprise', price: 100 },
			{ name: 'Pro', price: 50 },
			{ name: 'Starter', price: 25 },
			{ name: 'Free', price: 0 }
		],
		active:{}
	},

	components: {
		plan: {
			template: '#plan-template',

			props: ['plan','active'],

			computed: {
				isDowngrade: function(){
					return this.plan.price<this.active.price

				}
			},

			methods: {
				setActivePlan: function(){
					this.active=this.plan;
				}
			}
		}

	}

});