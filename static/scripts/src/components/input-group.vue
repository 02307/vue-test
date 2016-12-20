<template>
    <div class="input-group" :class="[
    	size ? 'input-group-' + size : ''
    ]">
        <slot name="before" />
        <slot />      
        <input :type="type" class="form-control" :placeholder="placeholder" /> 
        <slot name="after" />
    </div>
</template>

<script type="text/javascript">

module.exports = {

	name : 'input-group',

	props : {

		size : {
			type : String
		},

        type : {
            type : String,
            default : 'text'
        },

        placeholder : {
            type : String
        }

	}


}

</script>

