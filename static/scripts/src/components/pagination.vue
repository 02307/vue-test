<script type="text/javascript">
let pager = require( './pager.vue' );

module.exports = {

	props : {
		size : String,
		total : Number,
		layout : {
			type : String,
			default : 'pager'
		},
		current : {
			type : Number,
			default : 1
		},
		rows : {
			type : Number,
			default : 10
		},
		pageRows : Array
	},

	computed : {

	},

	methods : {

	},

	render( createElement ){
		let component,
			pageRows = this.pageRows,
			layouts = [];

		this.layout.split( ',' ).forEach( layout => {
			switch( layout ){
				case 'total':
					component = createElement( 'span' , {
						class : {
							'pagination-total' : true
						}
					} , `共 ${this.total} 条` );
					break;

				case 'select':
					if( !pageRows || !pageRows.length ){
						return;
					}
					component = createElement( 'dropdown' , {

					});
					break;

				case 'pager':
					component = createElement( 'pager' , {
						props : {
							size : this.size,
							total : this.total,
							rows : this.rows,
							current : this.current
						}
					});
					break;

				default :
					return;
			}
			layouts.push( component );
		});

		return createElement( 'div' , {
			class : {
				'pagination-widget' : true
			},
			on : {
				

			}
		} , layouts );
	}

}
</script>