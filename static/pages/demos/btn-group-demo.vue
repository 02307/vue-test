<template>
	<div>
		<h4>按钮组</h4>
		<btn-group>
			<btn v-for="_day in days">{{ _day }}</btn>
		</btn-group>

		<h4>带下拉按钮组</h4>
		<btn-group>
			<btn v-for="_day in days">{{ _day }}</btn>
			<btn-group @item-click="dayChange">
				<btn>
					{{ day }}
					<span class="caret"></span>
				</btn>
				<dropdown-menu>
					<dropdown-item v-for="_day in days" :text="_day">
						{{ _day }}
					</dropdown-item>
				</dropdown-menu>
			</btn-group>
		</btn-group>


	</div>
</template>

<script type="text/javascript">
module.exports = {
	data(){
		return {
			day : 'monday',
			days : [ 'monday' , 'tuesday' , 'wednesday' , 'thursday' , 'friday' , 'saturday' , 'sunday' ]
		}
	},

	methods : {
		dayChange( event , day ){
			this.day = day;
		}
	}


}

</script>