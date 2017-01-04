module.exports = {

	methods : {

		dispatch( componentName , eventName , ...params ){
			let $parent = this.upFind( componentName );
			$parent.$emit.apply( $parent , [ eventName , ...params , this ] );
		},

		upFind( componentName ){
			let $parent = this.$parent;
			let reg = componentName;
			if( typeof componentName === 'string' ){
				reg = new RegExp( '^' + componentName + '$' );
			}
			while( $parent ){
				if( reg.test( $parent.$options.name ) || reg.test( $parent.$options._componentTag ) ){
					return $parent;
				}
				$parent = $parent.$parent;
			}
		}

	}

}