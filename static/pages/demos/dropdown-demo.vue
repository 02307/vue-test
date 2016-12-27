<template>
	<dropdown @item-click="handleClick">
		<btn>{{ current }} <span class="caret"></span></btn>
		<dropdown-menu>
			<dropdown-item
				v-for="item in items"
				:text="item"
			>
				{{ item }}
			</dropdown-item>
		</dropdown-menu>
	</dropdown>
</template>

<script type="text/javascript">
module.exports = {

	data(){
		return {
			current : 'one',
			items : [
				'one' , 'two' , 'three' , 'four'
			]
		}
	},

	methods : {

		handleClick( event , text ){
			this.current = text;
		}

	}


}

</script>