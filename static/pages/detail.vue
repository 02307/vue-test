<template>
	<div class="panel panel-default">
        <div class="panel-heading">{{ nav }}</div>
        <div class="panel-body">
            <transition mode="in-out">
                <router-view></router-view>
            </transition>
            <div style="text-align:center;">
                <a href="javascript:;" @click="show=!show">{{ show ? '收起' : '显示' }}代码</a>
            </div>
            <transition name="fade" v-if="show">
                <pre class="pre">{{ code }}</pre>
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
    	...mapState( [ 'nav' , 'code' ] )
    },

    watch : {
    	nav(){
    		this.show = false;
    	}
    }

}

</script>