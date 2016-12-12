<template>
	<div>
		the new user is {{ userId }}
	</div>
</template>

<script type="text/javascript">
	module.exports = {
		computed : {
			userId(){
				return this.$route.params.id + 22 
			}
		},

		watch : {
			$route( to , from ){
				console.log( to.params.id , 'to' , from.params.id )
				console.log( to.matched )
			}
		}

	}
</script>
