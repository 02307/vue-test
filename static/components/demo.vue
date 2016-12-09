<template>
	<div>
		{{ content }}
		<p v-if="$slots.default"><slot /></p>
	</div>
</template>

<script type="text/javascript">
	module.exports = {

		name : 'zwj-demo',

		props : {
			content : {
				type : String,
				default : 'hello vue-demo'
			}
		},

		data(){
			return {
				name : 'zwj-demo',
				more : 'to do more'
			}
		}


	}	

</script>