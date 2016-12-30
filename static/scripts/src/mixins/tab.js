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
			let len = this.tabLength;
			let current = _getIndex( n , len );
			if( current == this.current ){
				return;
			}
			this.direction = direction || ( current > this.currentTab ? 'right' : 'left' );
			this.prevTab = this.currentTab;
			this.currentTab = current;
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