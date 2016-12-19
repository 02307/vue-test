<template>
	<li
		:class="active"
		@click="!disabled && dispatch( 'nav' , 'item-click' , $event , href )"
	>
		<a :href="href"><slot /></a>
	</li>
</template>

<script type="text/javascript">
let dispatch = require( '../mixins/dispatch.js' );

module.exports = {

	mixins : [ dispatch ],

	props : {
		disabled : Boolean,
		active : Boolean,
		href : {
			type : String,
			default : 'javascript:;'
		}
	},

}

</script>