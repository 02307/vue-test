module.exports = {

	methods : {

		dispatch( componentName , eventName , ...params ){
			let parent = this;
			let reg = componentName;
			if( typeof componentName === 'string' ){
				reg = new RegExp( '^' + componentName + '$' );
			}
			while( parent ){
				if( reg.test( parent.$options.name ) || reg.test( parent.$options._componentTag ) ){
					parent.$emit.apply( parent , [ eventName , ...params , this ] );
					break;
				}
				parent = parent.$parent;
			}
		}

	}

}