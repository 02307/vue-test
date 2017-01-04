<template>
	<transition
		:enter-class="direction"
		:leave-active-class="direction == 'right' ? 'prev' : 'next'"
		@enter="beginSlide"
		@after-enter="afterSlide"
	>
		<div
			class="item"
			:class="[
				{ active : isActive }
			]"
			v-show="isActive"
		>
			<slot />
			<div class="carousel-caption" v-if="$slots.caption">
				<slot name="caption" />
			</div>
		</div>
	</transition>
</template>
<script type="text/javascript">
const Vue = require( 'vue' );
const dispatch = require( '../mixins/dispatch.js' );
const isIE9 = Vue.util.isIE9;

module.exports = {

	mixins : [ dispatch ],

	data(){
		let p = this.upFind( 'slider' );
		return {
			isActive : p.currentTab == this.index,
			direction : p.direction
		}
	},

	props : {
		index : Number
	},

	methods : {
		beginSlide(){
			this.dispatch( 'slider' , 'sliding' , true );
		},
		afterSlide(){
			this.dispatch( 'slider' , 'sliding' , false );
		}
	},

	beforeUpdate(){
		let p = this.upFind( 'slider' );
		this.isActive = p.currentTab == this.index;
		this.direction = p.direction;
	}

}
 
</script>