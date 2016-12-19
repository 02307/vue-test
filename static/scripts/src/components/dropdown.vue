<template>
    <div class="dropdown" 
        :class="[
            { 'dropup' : dropup },
            { 'open' : isOpen }
        ]"
        @click="isOpen=!isOpen"
        v-outclick="hide"
    >        
        <slot />
    </div>
</template>

<script type="text/javascript">
module.exports = {

    data(){
        return {
            isOpen : false,
            list : []
        }
    },

    props: {
        dropup : {
        	type : Boolean
        }
    },

    mounted(){
        this.$on( 'item-click' , function( event , text , child ){
            this.itemClick( text );
        })
    },

    methods : {

        show(){
            this.isOpen = true;
        },

        hide(){
            this.isOpen = false;
        },

        itemClick( args ){
            console.log( 'item-click' , args )
        }

    }

}

</script>

