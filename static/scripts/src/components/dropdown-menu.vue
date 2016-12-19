<template>
	<transition>
	    <ul class="dropdown-menu" 
	    	:class="{'dropdown-menu-right' : right }"
	    >
	        <slot  />
	    </ul>
	</transition>
</template>

<script type="text/javascript">

	module.exports = {
		props : {
			right : {
				type : Boolean
			}
		}
	}
	
</script>
