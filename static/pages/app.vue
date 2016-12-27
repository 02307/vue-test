<template>
    <div class="container-fluid row">

    	<!-- 头部 -->
        <div class="page-header col-md-12 col-lg-12 col-xs-12">
            <h1>
			  	组件用法示例
			  	<small>{{ nav }}示例</small>
		  	</h1>
        </div>

        <!-- 左侧菜单 -->
        <div class="col-md-3 col-lg-3 col-xs-3">
        	<nav-list></nav-list>
        </div>

        <!-- 右侧内容 -->
        <div class="col-md-9 col-lg-9 col-xs-9">
            <detail></detail>
        </div>

    </div>
</template>
<script type="text/javascript">
const detail = require( './detail.vue' );
const navList = require( './nav-list.vue' );
module.exports = {

    components : {
    	detail, navList
    },

    computed: {
    	nav(){
    		return this.$store.state.nav;
    	}
    }

}

</script>

