module.exports = {

	methods : {

		dispatch( componentName , eventName , ...params ){
			let parent = this.$parent;
			let reg = componentName;
			if( typeof componentName === 'string' ){
				reg = new RegExp( '^' + componentName + '$' );
			}
			while( parent ){
				if( reg.test( parent.$options.name ) ){
					parent.$emit.apply( parent , [ eventName , ...params , this ] );
					break;
				}
				parent = parent.$parent;
			}
		}

	}

}