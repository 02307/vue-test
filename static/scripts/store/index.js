const getters = require( './getters.js' );
const mutations = require( './mutations.js' );
const actions = require( './actions.js' );

module.exports = {

	state : {
		code : '',
		nav : '/dropdown',
		navs : [
			'dropdown' ,
			'btn' ,
			'btn-group' ,
			'input-group' ,
			'navs' ,
			'pager' ,
			'pagination'
		]
	},

	getters,

	mutations,

	actions

};