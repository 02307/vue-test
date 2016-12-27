<template>
	<li
		:class="[
			{ disabled : disabled },
			{ divider : separator },
			{ 'dropdown-header' : header }
		]"
		@click="!disabled && !header && !separator && dispatch( /^dropdown$|^btn-group$/ , '@@item-click' , $event , text )"
	>
		<template v-if="header || separator">
			<slot />
		</template>
		<a v-else :href="href">
			<slot />
		</a>
	</li>
</template>

<script type="text/javascript">
let dispatch = require( '../mixins/dispatch.js' );

module.exports = {

	mixins : [ dispatch ],

	props : {
		disabled : {
			type : Boolean,
			default : false
		},
		separator : {
			type : Boolean
		},
		header : {
			type : Boolean
		},
		href : {
			type : String,
			default : 'javascript:;'
		},
		text : {
			type : [ String , Number ]
		}
	}

}


</script>