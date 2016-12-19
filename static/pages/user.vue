<template>
    <div>
        the new user is {{ userId }}

        <ul>
            <li v-for="n in 10">
                <a href="javascript:;" @click="checkUser(n)">
                    It's {{ n }}
                </a>
            </li>
        </ul>

        <which-user :type="user"></which-user>
    </div>
</template>
<script type="text/javascript">
module.exports = {
    data(){
        return {
            user : 1
        }
    },

    computed: {
        userId() {
            return this.$route.params.id + 22
        }
    },

    components : {
        'which-user' : require( './which-user.vue' )
    },

    methods : {
        checkUser( user ){
            this.user = user;
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

