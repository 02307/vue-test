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
        	<a :href="'javascript:void ' + prev() + ';'" @click.stop="__changePage( $event , prev() )">&laquo;</a>
        </li>
		<li 
			v-for="page in pages"
			:class="{ active : current == page }"
		>
			<a v-if="page" :href="'javascript:void ' + page + ';'" >{{ page }}</a>
			<span v-else>...</span>
		</li>
        <li
        	:class="{ disabled : current == max }"
        >
        	<a :href="'javascript:void ' + next() + ';'" @click.stop="__changePage( $event , next() )">&raquo;</a>
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
			let first = current - 2;
			let last = current + 2;
			first = first <= 3 ? 2 : first;
			last = last >= max - 2 ? max - 1 : last;
			// first大于3,在前面加省略号
			if( first > 3 ){
				pgs.push( null );
			}
			for(let page=first;page<=last;page++){
				pgs.push( page );
			}
			// last小于max-2,在后面加省略号
			if( last < max - 2 ){
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