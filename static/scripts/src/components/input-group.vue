<template>
    <div class="input-group" :class="[
    	size ? 'input-group-' + size : ''
    ]">        
        <input v-if="after" :type="type" class="form-control" :placeholder="placeholder" />
        <span 
            :class="[
        	   isbtn ? 'input-group-btn' : 'input-group-addon'
            ]"
        >
            <slot />
        </span>
        <input v-if="!after" :type="type" class="form-control" :placeholder="placeholder" />        
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
        },

        isbtn : {
            type : Boolean
        },

        after : {
            type : Boolean
        }


	}


}

</script>

