<template>
	<div>
	    <alert
	        closeable
	        animate-func="left"
	    >
	        you can close me
	    </alert>
	    <alert
	    	:type="type"
	    >
	        there is a <a class="alert-link" href="#">link</a>
	    </alert>		

	    <dropdown @item-click="changeType">
	    	<btn>
	    		alert {{ type }}
	    		<span class="caret"></span>
	    	</btn>
	    	<dropdown-menu>
	    		<dropdown-item v-for="_type in types" :text="_type">
	    			alert {{ _type }}
	    		</dropdown-item>
	    	</dropdown-menu>
	    </dropdown>
	</div>
</template>

<script type="text/javascript">

module.exports = {

	data(){
		return {
			type : 'success',
			types : [ 'success' , 'info' , 'warning' , 'danger' ]
		}
	},

	methods : {
		changeType( event , type ){
			this.type = type;
		}
	}

}

</script>