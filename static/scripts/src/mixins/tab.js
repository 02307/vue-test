module.exports = {

	data(){
		return {
			prevTab : 0,
			nextTab : -1,
			direction : 'right',
			isMoving : false,
			currentTab : this.current || 0,
			tabLength : this.length || 0,
			timer : null,
			timing : this.interval || 50000
		}
	},

	methods : {
		prev(){
			this.stepTo( this.currentTab - 1 , 'left' );
		},

		next(){
			this.stepTo( this.currentTab + 1 , 'right' );
		},

		stepTo( n , direction ){
			if( this.isMoving ){
				return;
			}
			this.direction = direction || 'right';
			let len = this.tabLength;			
			this.currentTab = _getIndex( n , len );
			this.prevTab = _getIndex( n - 1 , len );
			this.nextTab = _getIndex( n + 1 , len );
		},

		start(){
			this.stop();
			this.direction = 'right';
			this.timer = setInterval( () => {
				this.next()
			} , this.timing );
		},

		stop(){
			clearInterval( this.timer );
		}
	},

	created(){
		this.stepTo( 0 );
	},

	mounted(){
		this.$on( 'sliding' , isMoving => {
			this.isMoving = isMoving;
		});
		if( this.autoPlay ){
			setTimeout( () => this.start() );
		}
	}

}

let _getIndex = ( n , len ) => {
	return ( ( n | 0 ) % len + len ) % len;
}