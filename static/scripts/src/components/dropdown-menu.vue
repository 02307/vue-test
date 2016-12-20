<template>
    <ul class="dropdown-menu" 
    	:class="{'dropdown-menu-right' : right }"
    >
        <slot  />
    </ul>
</template>

<script type="text/javascript">

	module.exports = {
		props : {
			right : Boolean
		}
	}
	
</script>
