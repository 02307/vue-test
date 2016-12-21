const {
	optionName , pushEl , destroy
} = require( '../mixins/outclick.js' );
let installed;

// 导出vue插件
module.exports = {

	install( Vue , options ){
		if( installed )return;
		installed = true;
		Vue.directive( 'outclick' , directives.outclick );
	}

}

// 指令集
let directives = {

	outclick : {

		bind( el , binding , vnode ){
			pushEl( el );
			let __outclick = event => {
				let component = vnode.context;
				let clickData = el[optionName];
				if( !component || !clickData.expression ){
					return;
				}
				component[clickData.expression] && component[clickData.expression]();
			}
			el[optionName].__outclick.push( __outclick );
			el[optionName].expression = binding.expression;			
		},

		update( el , binding ){
			el[optionName].expression = binding.expression;
		},

		unbind : destroy

	}


}