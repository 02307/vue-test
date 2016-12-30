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


            <div style="height:200px;">

                <slider control :length="3" :auto="false">
                    <template scope="props">
                        <slider-item 
                            v-for="( n , index ) in 3"
                            :index="index" 
                            :active="props.current == index"
                            :prev="props.prev == index"
                            :next="props.next == index"
                            :direction="props.direction"
                        >
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDkwMCA1MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxkZWZzLz48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzc3NyIvPjxnPjx0ZXh0IHg9IjM0MSIgeT0iMjUwIiBzdHlsZT0iZmlsbDojNzc3O2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjQycHQ7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+OTAweDUwMDwvdGV4dD48L2c+PC9zdmc+">
                            <div slot="caption">
                                <h1>hello {{ n }}</h1>
                            </div>
                        </slider-item>
                    </template>
                </slider>

            </div>


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
