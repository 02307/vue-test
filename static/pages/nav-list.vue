<template>
    <navs stacked pill>
        <router-link v-for="_nav in navs" tag="li" :to="_nav" exact>
            <a>{{ _nav }}</a>
        </router-link>
    </navs>	
</template>

<script type="text/javascript">
module.exports = {
	computed : {
		navs(){
			return this.$store.state.common.navs
		}
	}
}
</script>