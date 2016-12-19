module.exports = {

	methods : {

		dispatch( componentName , eventName , ...params ){
			let parent = this.$parent;
			while( parent ){
				if( parent.$options.name == componentName ){
					parent.$emit.apply( parent , [ eventName , ...params , this ] );
					break;
				}
				parent = parent.$parent;
			}
		}

	}

}