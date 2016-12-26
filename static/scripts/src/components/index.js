const dropdown = require( './dropdown.vue' );
const dropdownMenu = require( './dropdown-menu.vue' );
const dropdownItem = require( './dropdown-item.vue' );
const button = require( './button.vue' );
const buttonGroup = require( './button-group.vue' );
const inputGroup = require( './input-group.vue' );
const inputAddon = require( './input-addon.vue' );
const navs = require( './nav.vue' );
const navItem = require( './nav-item.vue' );
const pager = require( './pager.vue' );
const pagination = require( './pagination/pagination.vue' );

module.exports = {

	install( Vue ){
		Vue.component( 'dropdown' , dropdown );
		Vue.component( 'dropdown-menu' , dropdownMenu );
		Vue.component( 'dropdown-item' , dropdownItem );
		Vue.component( 'btn' , button );
		Vue.component( 'btn-group' , buttonGroup );
		Vue.component( 'input-group' , inputGroup );
		Vue.component( 'input-addon' , inputAddon );
		Vue.component( 'navs' , navs );
		Vue.component( 'nav-item' , navItem );
		Vue.component( 'pager' , pager );
		Vue.component( 'pagination' , pagination );
	}


}
