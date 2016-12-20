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
		},
		dropdown : Boolean
	},

	render( createElement ){
		let options = {
			props : {
				disabled : this.disabled
			},
			class : {
				active : this.active,
				disabled : this.disabled
			},
			on : {
				click : event => {
					if( !this.disabled ){
						this.dispatch( 'navs' , '@@item-click' , event , this.href );
					}
				}
			}
		};
		if( !this.dropdown ){
			return createElement( 'li' , options , this.$slots.default );
		}
		options.props.tag = 'li';
		return createElement( 'dropdown' , options , this.$slots.default );
	}

}

</script>