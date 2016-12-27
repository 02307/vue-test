<template>
	<div>

		<btn>button</btn>

		<btn disabled>disabled btn</btn>

		<btn active>active btn</btn>

		<br />

		<div>
			<btn :size="size" :type="type">dynamic btn</btn>

			<dropdown style="display:inline-block;" @item-click="sizeChange">
				<btn>
					btn {{ size }}
					<span class="caret"></span>
				</btn>
				<dropdown-menu>
					<dropdown-item v-for="_size in sizes" :text="_size">
						btn {{ _size }}
					</dropdown-item>
				</dropdown-menu>
			</dropdown>

			<dropdown style="display:inline-block;" @item-click="typeChange">
				<btn>
					btn {{ type }}
					<span class="caret"></span>
				</btn>
				<dropdown-menu>
					<dropdown-item v-for="_type in types" :text="_type">
						btn {{ _type }}
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
			size : 'lg',
			sizes : [ 'lg' , 'sm' , 'xs' ],
			type : 'default',
			types : [ 'primary' , 'success' , 'info' , 'warning' , 'danger' ]
		}
	},

	methods : {
		sizeChange( event , size ){
			this.size = size;
		},
		typeChange( event , type ){
			this.type = type;
		}
	}


}


</script>