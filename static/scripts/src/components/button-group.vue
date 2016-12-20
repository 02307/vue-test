<template>	
	<div class="btn-group"
 		:class="[
 			{ 'btn-group-vertical' : vertical },
 			{ 'btn-group-justified' : justify },
 			{ 'open' : isOpen },
 			size ? 'btn-group-' + size : ''
 		]"
 		v-outclick="hide"
	>
		<slot />
	</div>
</template>

<script type="text/javascript">
const dropdown = require( '../mixins/dropdown.js' );

module.exports = {

	name : 'btn-group',

	mixins : [ dropdown ],

	props : {
		vertical : {
			type : Boolean
		},
		justify : {
			type : Boolean
		},
		size : {
			type : String
		}
	}

}

</script>