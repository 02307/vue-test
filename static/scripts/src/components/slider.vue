<template>
	<div class="carousel slide">
		<ul class="carousel-indicators">
			<li
				v-for="n in length"
				:class="{ active : currentTab == n - 1 }"
				@click="stepTo( n - 1 )"
			>
			</li>
		</ul>
		<div class="carousel-inner" ref="inner">
			<slot
				:current="currentTab"
				:prev="prevTab"
				:next="nextTab"
				:direction="direction"
			>
			</slot>
		</div>
		<template v-if="control">
			<a href="javascript:;" class="left carousel-control" @click="prev">
				prev
			</a>
			<a href="javascript:;" class="right carousel-control" @click="next">
				next
			</a>
		</template>
	</div>
</template>

<script type="text/javascript">
const tab = require( '../mixins/tab.js' );

module.exports = {

	mixins : [ tab ],

	props : {
		current : Number,
		length : Number,
		control : Boolean,
		autoPlay : {
			type : Boolean,
			default : true
		},
		indicator : {
			type : Boolean,
			default : true
		}
	}

}

</script>