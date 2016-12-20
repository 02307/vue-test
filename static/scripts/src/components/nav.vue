<template>
    <ul 
    	class="nav"
    	:class="[    	
    		stacked ? 'nav-stacked' : 'nav-tabs',
    		{ 'nav-pills' : pill }
    	]"
    >
    	<slot />
    </ul>
</template>

<script type="text/javascript">
module.exports = {

	name : 'navs',

	props : {
		pill : Boolean,
		stacked : Boolean
	},

	mounted(){
		this.$on( '@@item-click' , function( event , href , item ){
			this.$emit( 'item-click' , event , href , item );
		});
	},

	methods : {

		selectItem( event , href , item ){
			let children = this.$children;
			for(let i=0;i<children.length;i++){
				children[i].active = false;
			}
			item.active = true;
		}
	}

}

</script>
