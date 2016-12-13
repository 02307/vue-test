 <template>
 	<button
 		:type="nativeType"
 		:disabled="disabled"
 		class="zwj-btn"
 		:class="[
 			type ? 'zwj-btn-' + type : '',
 			size ? 'zwj-btn-' + size : ''
 		]"
 		@click="$emit( 'click' , $event )"
 	>
 		<i :class="'zwj-icon-' + icon" v-if="icon"></i>
 		<span v-if="$slots.default"><slot /></span>
 	</button>
 </template>

 <script>

 	module.exports = {

 		name : 'zwj-button',

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
 			},
 			nativeType : {
 				type : String,
 				default : 'button'
 			}
 		}

 	}

 </script>