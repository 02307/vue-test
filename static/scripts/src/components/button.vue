 <template>
 	<button type="button"
 		:disabled="disabled"
 		class="btn"
 		:class="[
 			type ? 'btn-' + type : '',
 			size ? 'btn-' + size : '',
 			{ active : active },
 			{ disabled : disabled }
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

 		data(){
 			return {
 				active : false
 			}
 		},

 		props : {
 			disabled : {
 				type : Boolean
 			},
 			type : {
 				type : String,
 				default : 'default'
 			},
 			size : {
 				type : String
 			},
 			icon : {
 				type : String,
 				default : ''
 			}
 		}

 	}

 </script>