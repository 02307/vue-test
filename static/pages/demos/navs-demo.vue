<template>
	<navs @item-click="navChange">
		<nav-item v-for="nav in navs" :active="current==nav" :href="nav">
			<a href="javascript:;">{{ nav }}</a>
		</nav-item>
	</navs>
</template>

<script type="text/javascript">
module.exports = {
	data(){
		return {
			current : 'home',
			navs : [ 'home' , 'guide' , 'api' , 'community' ]
		}
	},

	methods : {
		navChange( event , nav ){
			this.current = nav;
		}
	}
}
</script>