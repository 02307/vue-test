<template>
	<div class="pagination-total">
		<span>
			共 {{ total }} 条
		</span>
	</div>
</template>

<script type="text/javascript">
module.exports = {
	props : {
		total : {
			type : Number,
			default : 0
		}
	}
}
</script>