 <template>
 	<button type="button"
 		:disabled="disabled"
 		class="btn"
 		:class="[
 			type ? 'btn-' + type : '',
 			size ? 'btn-' + size : '',
 			{ disabled : disabled },
 			{ active : active }
 		]"
 		@click.stop="$emit( 'click' , $event )"
 	>
 		<i :class="'icon-' + icon" v-if="icon"></i>
		<slot />
 	</button>
 </template>

 <script>

 	module.exports = {

 		name : 'btn',

 		props : {
 			disabled : Boolean,
 			active : Boolean,
 			size : String,
 			type : {
 				type : String,
 				default : 'default'
 			},
 			icon : {
 				type : String,
 				default : ''
 			}
 		}

 	}

 </script>