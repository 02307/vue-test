module.exports = {
	// mode : 'history',
	routes : [
		{
			path : '/',
			component : require( '../pages/index.vue' )	
		},
		{
			path : '/list',
			component : require( '../pages/list.vue' )
		},
		{
			name : 'user',
			path : '/user/:id',
			component : require( '../pages/user.vue' )
		},
		{
			// 404 跳转到首页
			path : '/*',
			redirect(){
				return '/'
			}
		}
	]
};