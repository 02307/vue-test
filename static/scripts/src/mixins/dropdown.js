module.exports = {

	data(){
		return {
			isOpen : false,
			itemList : []
		};
	},

	props : {
		disabled : Boolean
	},

    methods : {

        show(){
            this.isOpen = true;
        },

        hide(){
            this.isOpen = false;
        }

    },

    mounted( el ){
        this.$on( '@@item-click' , function( event , text , child ){
            this.$emit( 'item-click' , event , text , child );
        });
        this.$el.addEventListener( 'click' , () => {
        	if( !this.disabled ){
        		this.isOpen = !this.isOpen	
        	}
        });
    },
}