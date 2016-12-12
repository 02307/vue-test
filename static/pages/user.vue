<template>
    <div>
        the new user is {{ userId }}
    </div>
</template>
<script type="text/javascript">
module.exports = {
    computed: {
        userId() {
            return this.$route.params.id + 22
        }
    },

    watch: {
        $route(to, from) {
            let arr = ['aa', 'b', 'c', 'd'];
            console.log(to.params.id, 'to', from.params.id)
            console.log(...arr, 'something more...');
        }
    },

    beforeRouteEnter( to , from , next ){
    	console.log( 'before router ')
    	next()
    }

}

</script>

