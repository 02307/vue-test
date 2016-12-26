<script type="text/javascript">
let components = {
	total : require( './pagination-total.vue' ),
	selector : require( './pagination-selector.vue' ),
	jumper : require( './pagination-jumper.vue' )
};

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

	components,

	render( createElement ){
		let component,
			layouts = [];

		this.layout.split( ',' ).forEach( layout => {
			switch( layout.trim() ){
				case 'total':
					component = createElement( 'total' , {
						props : {
							total : this.total
						}
					});
					break;

				case 'selector':
					component = createElement( 'selector' , {
						props : {
							rows : this.rows,
							pageRows : this.pageRows
						},
						on : {
							'rows-change' : rows => {
								this.$emit( 'rows-change' , rows );
								// 一页显示的条数变动后，当前对应的页面也有可能变动 
								let _current = Math.ceil( this.rows * this.current / rows );
								if( _current !== this.current ){
									this.$emit( 'page-change' , _current );
								}
							}
						}
					});
					break;

				case 'pager':
					component = createElement( 'pager' , {
						props : {
							size : this.size,
							rows : this.rows,
							total : this.total,
							current : this.current
						},
						on : {
							'page-change' : page => {
								this.$emit( 'page-change' , page );
							}
						}
					});
					break;

				case 'jumper':
					component = createElement( 'jumper' , {
						props : {
							current : this.current,
							max : Math.ceil( this.total / this.rows )
						},
						on : {
							'page-change' : page => {
								this.$emit( 'page-change' , page );
							}
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
			}
		} , layouts );
	}

}
</script>