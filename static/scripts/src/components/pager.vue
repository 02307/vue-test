<template>
	<ul 
		v-if="total"
		class="pagination"
		:class="[
			size ? 'pagination-' + size : ''
		]"
		@click.stop="__changePage"
	>
        <li
        	:class="{ disabled : current == 1 }"
        >
        	<a :href="'javascript:' + prev() + ';'" @click.stop="__changePage( $event , prev() )">&laquo;</a>
        </li>
		<li 
			v-for="page in pages"
			:class="{ active : current == page }"
		>
			<a v-if="page" :href="'javascript:' + page + ';'" >{{ page }}</a>
			<span v-else>...</span>
		</li>
        <li
        	:class="{ disabled : current == max }"
        >
        	<a :href="'javascript:' + next() + ';'" @click.stop="__changePage( $event , next() )">&raquo;</a>
        </li>
	</ul>
</template>

<script type="text/javascript">

module.exports = {

	props : {
		size : String,
		total : Number,
		current : {
			type : Number,
			default : 1
		},
		rows : {
			type : Number,
			default : 10
		}
	},

	computed : {
		max(){
			return Math.ceil( this.total / this.rows );
		},
		pages(){
			let pgs = [ 1 ];
			let max = this.max;
			if( max == 1 ){
				return pgs;
			}
			let current = this.current;
			let before = current - 2;
			let after = current + 2;
			before = before <= 3 ? 2 : before;
			after = after >= max - 2 ? max - 1 : after;
			// before大于3,在前面加省略号
			if( before > 3 ){
				pgs.push( null );
			}
			for(let page=before;page<=after;page++){
				pgs.push( page );
			}
			// after小于max-2,在后面加省略号
			if( after < max - 2 ){
				pgs.push( null );
			}
			pgs.push( max );
			return pgs;
		}
	},

	methods : {
		prev(){
			return this.current > 2 ? this.current - 1 : 1;
		},
		next(){
			return this.current < this.max ? this.current + 1 : this.max;
		},
		__changePage( event , _page ){
			let target = event.target;
			let page = +target.innerText.trim() || _page;
			if( page
				&& page > 0 && page <= this.max
				&& page !== this.current ){
				return this.$emit( 'page-change' , page );
			}
		}
	}

}
</script>