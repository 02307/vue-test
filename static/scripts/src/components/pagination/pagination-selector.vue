<template>
	<div v-if="pageRows && pageRows.length" class="pagination-selector">
		<dropdown @item-click="__handleChangeRows">
			<btn size="sm">
				{{ rows }}条/页
				<span class="caret"></span>
			</btn>
			<dropdown-menu>
				<dropdown-item v-for="item in pageRows" :text="item">
					{{ item }}
				</dropdown-item>
			</dropdown-menu>
		</dropdown>
	</div>
</template>

<script type="text/javascript">

module.exports = {

	props : {
		rows : Number,
		pageRows : Array
	},

	methods : {
		__handleChangeRows( event , rows ){
			this.$emit( 'rows-change' , rows );
		}
	}
}
</script>