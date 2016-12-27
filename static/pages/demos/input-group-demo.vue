<template>
	<div>
		<h4>前面有元素</h4>
		<input-group placeholder="somebody">
			<input-addon>@</input-addon>
		</input-group>

		<h4>后面有元素</h4>
		<input-group>
			<input-addon slot="after">.00</input-addon>
		</input-group>

		<div>
			<h4>后面有一个btn,可变尺寸</h4>
			<input-group placeholder="somewhere" :size="size">
				<input-addon btn slot="after">
					<btn>GO</btn>
				</input-addon>
			</input-group>
			<dropdown @item-click="changeSize">
				<btn>
					group {{ size }}
					<span class="caret"></span>
				</btn>
				<dropdown-menu>
					<dropdown-item v-for="_size in sizes" :text="_size">
						group {{ _size }}
					</dropdown-item>
				</dropdown-menu>
			</dropdown>
		</div>

	</div>
</template>

<script type="text/javascript">

module.exports = {
	data(){
		return {
			size : 'default',
			sizes : [ 'default' , 'lg' , 'sm' ]
		}
	},

	methods : {
		changeSize( event , size ){
			this.size = size;
		}
	}

}

</script>