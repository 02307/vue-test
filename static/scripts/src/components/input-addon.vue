<template>
	<div
		:class="[
			btn ? 'input-group-btn' : 'input-group-addon',
			{ open : isOpen }
		]"
		v-outclick="hide"
	>
		<slot />
	</div>	
</template>

<script type="text/javascript">
const dropdown = require( '../mixins/dropdown.js' );

module.exports = {

	mixins : [ dropdown ],

	props : {
		btn : Boolean,
		dropdown : Boolean
	}

}

</script>