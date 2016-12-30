<template>
	<transition :name="animateFunc" :mode="animateMode">
	    <div
	    	class="alert"
	    	:class="[
	    		{ 'alert-dismissable' : closeable },
	    		type ? 'alert-' + type : ''
	    	]"
	    	v-show="show"
	    >
	        <button
	        	type="button"
	        	class="close"
	        	v-if="closeable"
	    		@click="show=false"
	        >
	        	<span>&times;</span>
	        </button>
	        <slot />
	    </div>
	</transition>
</template>

<script type="text/javascript">
const transition = require( '../mixins/transition.js' );

module.exports = {

	mixins : [ transition ],

	data(){
		return {
			show : true
		}
	},

	props : {
		type : {
			type : String,
			default : 'success'
		},
		closeable : Boolean
	}

}
</script>