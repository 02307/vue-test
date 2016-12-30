const outclick = require( './outclick.js' );

module.exports = {

	data(){
		return {
			isOpen : false,
            __isDropdown : false
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
        },

        toggle(){
            this.isOpen = !this.isOpen;
        }

    },

    mounted(){
        let hasMenu = _find( this.$children , node => {
            return node.$options.name == 'dropdown-menu' ||
                    node.$options._componentTag == 'dropdown-menu';
        });
        if( this.__isDropdown || !hasMenu ){
            return;
        }
        this.__isDropdown = true;
        let el = this.$el;
        let toggleBtn = _find( this._vnode.children , node => {
            if( node.data && node.data.attrs && node.data.attrs['toggle'] !== undefined ){
                return node.elm;
            }
        });

        if( !toggleBtn ){
            toggleBtn = this.$el.children[0];
        }        

        this.$on( '@@item-click' , function( event , text , child ){
            this.$emit( 'item-click' , event , text , child );
        });

        toggleBtn && toggleBtn.addEventListener( 'click' , event => {
            if( this.disabled ){
                return;
            }
            event.stopPropagation();
        	this.isOpen = !this.isOpen;
        } , false );

        outclick.pushEl( toggleBtn || el );
        outclick.onoutclick( toggleBtn || el , event => {
            this.isOpen = false;
        });
    },

    beforeDestroy : outclick.destroy
}

let _find = ( children , cb ) => {
    let res;
    if( !children || !children.length ){
        return res;
    }
    for(let i=0;i<children.length;i++){
        if( ( res = cb( children[i] ) ) ){
            return res;
        }
    }
    return res;
}