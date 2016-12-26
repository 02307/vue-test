<template>
	<div class="pagination-jumper">
		<span>
            跳转到第
            	<input
            		type="text"
            		v-model.lazy="page"
            		@keyup.enter="__handleJump"
            		placeholder="几"
            	/>
            页
            <btn size="sm" @click="__handleJump">GO</btn>
        </span>
	</div>
</template>

<script type="text/javascript">
module.exports = {
	data(){
		return {
			currentPage : this.current,
			page : 1
		}
	},

	props : {
		current : Number,
		max : Number
	},

	watch : {
		page( value ){
			let max = this.max;
			value = Math.round( value );
			this.page = value > max ? max :
						value < 1 ? 1 : value;
		}
	},

	methods : {
		__handleJump(){
			if( this.page == this.currentPage ){
				return;
			}
			this.currentPage = this.page;
			this.$emit( 'page-change' , this.page );
		}
	}
}

</script>