module.exports = {
	linkActiveClass : 'active',
	// mode : 'history',
	routes : [
		{
			path : '/dropdown',
			component : require( '../pages/demos/dropdown-demo.vue' )
		},
		{
			path : '/btn',
			component : require( '../pages/demos/btn-demo.vue' )
		},
		{
			path : '/btn-group',
			component : require( '../pages/demos/btn-group-demo.vue' )
		},
		{
			path : '/input-group',
			component : require( '../pages/demos/input-group-demo.vue' )
		},
		{
			path : '/navs',
			component : require( '../pages/demos/navs-demo.vue' )
		},
		{
			path : '/pager',
			component : require( '../pages/demos/pager-demo.vue' )
		},
		{
			path : '/pagination',
			component : require( '../pages/demos/pagination-demo.vue' )
		},
		{
			// 404 跳转到dropdown
			path : '/*',
			redirect(){
				return '/dropdown';
			}
		}
	]

};