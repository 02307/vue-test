const noop = () => {};

// v-outclick 元素外部点击指令
const outclickNodes = [];
let directiveData = '@@clickOutSide';

// 检测c元素是否为p的子元素
let _contains = ( p , c ) => {
	if( !c || c == document.body || c == document.documentElement ){
		return false;
	}
	while( c !== document.body ){
		if( c == p ){
			return true;
		}
		c = c.parentNode;
	}
	return false;
}

// 在document上监听点击事件,触发有outclick指令的组件事件
document.addEventListener( 'click' , event => {
	outclickNodes.forEach( el => {
		el[directiveData].__outclick( event );
	});
});

// 导出vue插件
module.exports = {

	install( Vue , options ){
		Vue.directive( 'outclick' , directives.outclick );
	}

}

// 指令集
let directives = {

	outclick : {

		bind( el , binding , vnode ){
			outclickNodes.push( el );
			let __outclick = event => {
				let component = vnode.context;
				let clickData = el[directiveData];
				if( !component || !clickData.expression || _contains( el , event.target ) ){
					return;
				}
				component[clickData.expression] && component[clickData.expression]();
			}
			el[directiveData] = {
				__outclick,
				expression : binding.expression
			};
		},

		update( el , binding ){
			el[directiveData].expression = binding.expression;
		},

		unbind( el ){
			for(let i=0,len=outclickNodes.length;i<len;i++){
				if( outclickNodes[i] === el ){
					outclickNodes.splice( i , 1 );
					break;
				}
			}
		}

	}


}