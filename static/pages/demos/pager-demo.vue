<template>
	<pager
		@page-change="changePage"
		:current="current"
		:total="total"
		:rows="rows"
	>
	</pager>
</template>

<script type="text/javascript">

module.exports = {
	data(){
		return {
			current : 1,
			total : 200,
			rows : 20
		}
	},

	methods : {
		changePage( page ){
			this.current = page;
		}
	}
}
</script>