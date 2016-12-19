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
 	>
 		<i :class="'icon-' + icon" v-if="icon"></i>
 		<span v-if="$slots.default"><slot /></span>
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
 				type : Number
 			},
 			icon : {
 				type : String,
 				default : ''
 			}
 		}

 	}

 </script>