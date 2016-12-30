<template>
	<transition
		:enter-class="direction"
		:leave-active-class="direction == 'right' ? 'prev' : 'next'"
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

	data(){
		let p = this.upFind( 'slider' );
		return {
			currentTab : p.currentTab,
			active : p.currentTab == this.index,
			prev : p.prevTab == this.index,
			next : p.nextTab == this.index,
			direction : p.direction
		}
	},

	props : {
		index : Number
	},

	updated(){
		let p = this.upFind( 'slider' );
		this.currentTab = p.currentTab;
		this.active = p.currentTab == this.index;
		this.prev = p.prevTab == this.index;
		this.next = p.nextTab == this.index;
		this.direction = p.direction;
	}

}
 
</script>