<template>
	<transition
		:enter-class="getEnterLeaveClass()"
		:leave-class="getEnterLeaveClass()"
	>
		<div
			class="item"
			:class="[
				{ active : active }
			]"
			v-show="active"
		>
			<slot />
			<div class="carousel-caption" v-if="$slots.caption">
				<slot name="caption" />
			</div>
		</div>
	</transition>
</template>
<script type="text/javascript">
const dispatch = require( '../mixins/dispatch.js' );

module.exports = {

	mixins : [ dispatch ],

	props : {
		index : Number,
		active : Boolean,
		prev : Boolean,
		next : Boolean,
		direction : {
			type : String,
			default : 'right'
		}
	},

	methods : {
		getEnterLeaveClass(){
			let direction = this.direction;
			let prev = this.prev ? 'prev ' : '';
			let next = this.next ? 'next ' : '';
			let cl = prev + next + direction;
			return cl;
		}
	}

}
 
</script>