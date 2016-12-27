<template>
	<pagination
		@rows-change="changeRows"
		@page-change="changePage"
		layout="total,selector,pager,jumper"
		:total="total"
		:current="current"
		:rows="rows"
		:pageRows="pageRows"
	>
	</pagination>
</template>

<script type="text/javascript">

module.exports = {
	data(){
		return {
			total : 200,
			current : 1,
			rows : 10,
			pageRows : [ 10 , 20 , 40 ]
		}
	},

	methods : {
		changeRows( rows ){
			this.rows = rows;
		},
		changePage( page ){
			this.current = page;
		}
	}
}

</script>