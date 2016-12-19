<template>
    <div @click="increment">
        Hello router {{ iCount }}
    </div>
</template>
<script type="text/javascript">
const { mapState , mapActions } = require( 'vuex' );
module.exports = {

    data(){
    	return {
    		n : 1
    	}
    },

    computed : {
    	...mapState( [ 'count' ] ),
    	iCount : state => state.count + 1
    },

    methods : {
    	...mapActions( [ 'increment' ] ),
    	calc : () => 3
    }

}
</script>
