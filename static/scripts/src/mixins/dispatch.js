module.exports = {

	methods : {

		dispatch( componentName , eventName , ...params ){
			let node = this.upFind( componentName );
			node.$emit.apply( node , [ eventName , ...params , this ] );
		},

		upFind( componentName ){
			let parent = this;
			let reg = componentName;
			if( typeof componentName === 'string' ){
				reg = new RegExp( '^' + componentName + '$' );
			}
			while( parent ){
				if( reg.test( parent.$options.name ) || reg.test( parent.$options._componentTag ) ){
					return parent;
				}
				parent = parent.$parent;
			}
		}

	}

}