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

            <slider control :length="4" :auto="false">
                <slider-item 
                    v-for="( n , index ) in 4"
                    :index="index"
                >
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDkwMCA1MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxkZWZzLz48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzc3NyIvPjxnPjx0ZXh0IHg9IjM0MSIgeT0iMjUwIiBzdHlsZT0iZmlsbDojNzc3O2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjQycHQ7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+OTAweDUwMDwvdGV4dD48L2c+PC9zdmc+">
                    <div slot="caption">
                        <h1>hello {{ n }}</h1>
                    </div>
                </slider-item>
            </slider>
            
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
