<template>
	<div class="panel panel-default">
        <div class="panel-heading">{{ nav }}</div>
        <div class="panel-body">
            <transition mode="out-in" name="fade">
                <router-view></router-view>
            </transition>
            <div style="text-align:center;">
                <a href="javascript:;" @click="show=!show">{{ show ? '收起' : '显示' }}代码</a>
            </div>
            <transition mode="out-in" name="fade">
                <pre class="pre" v-if="show">{{ code }}</pre>
            </transition>
        </div>
    </div>
</template>

<script type="text/javascript">
const { mapState } = require( 'vuex' );

module.exports = {	

    data() {
        return {
            show: false
        }
    },

    computed : {
        nav(){
            return this.$store.state.common.nav
        },

        code(){
            return this.$store.state.common.code
        }
    },

    watch : {
    	nav(){
    		this.show = false;
    	}
    }

}

</script>