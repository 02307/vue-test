<template>
    <ul 
    	class="nav"
    	:class="[    	
    		stacked ? 'nav-stacked' : 'nav-tabs',
    		{ 'nav-pills' : pill }
    	]"
    >
    	<slot />
    </ul>
</template>

<script type="text/javascript">
module.exports = {

	name : 'navs',

	props : {
		pill : Boolean,
		stacked : Boolean
	}

}

</script>
