<template>	
	<div class="btn-group"
 		:class="[
 			{ 'btn-group-vertical' : vertical },
 			{ 'btn-group-justified' : justify },
 			size ? 'btn-group-' + size : ''
 		]"
	>
		<slot />
	</div>
</template>

<script type="text/javascript">

module.exports = {

	name : 'btn-group',

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