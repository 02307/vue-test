const dropdown = require( './components/dropdown.vue' );
const dropdownMenu = require( './components/dropdown-menu.vue' );
const dropdownItem = require( './components/dropdown-item.vue' );
const button = require( './components/button.vue' );
const buttonGroup = require( './components/button-group.vue' );
const inputGroup = require( './components/input-group.vue' );
const inputAddon = require( './components/input-addon.vue' );
const navs = require( './components/nav.vue' );
const navItem = require( './components/nav-item.vue' );
const pager = require( './components/pager.vue' );
const pagination = require( './components/pagination/pagination.vue' );
const alerts = require( './components/alert.vue' );
const slider = require( './components/slider.vue' );
const sliderItem = require( './components/slider-item.vue' );

let installed = false;

const directives = require( './plugins/directives.js' );

module.exports = {
	install( Vue ){
		if( installed ){
			return;
		}
		installed = true;
		directives( Vue );
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
		Vue.component( 'alert' , alerts );
		Vue.component( 'slider' , slider );
		Vue.component( 'slider-item' , sliderItem );
	}
}