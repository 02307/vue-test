// 已监听外部点击事件节点
const outclickNodes = [];
let optionName = '@@clickOutSide';

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

let _outclickHandle = ( handles , event ) => {
	if( !handles ){
		return;
	}
	if( typeof handles === 'function' ){
		handles = [ handles ];
	}
	for(let i=0;i<handles.length;i++){
		handles[i]( event );
	}
}

// 在document上监听点击事件,触发相关组件的outclick指令
document.addEventListener( 'click' , event => {
	outclickNodes.forEach( el => {
		if( _contains( el , event.target ) ){
			return;
		}
		_outclickHandle( el[optionName].__outclick , event );
	});
});

let pushEl = ( el ) => {
	if( !el || el[optionName] || find( el ) >= 0 ){
		return;
	}
	el[optionName] = el[optionName] || {
		__outclick : []
	};
	outclickNodes.push( el )
}

let onoutclick = ( el , handle ) => {
	el[optionName].__outclick.push( handle );
}

let find = ( el ) => {
	for(let i=0,len=outclickNodes.length;i<len;i++){
		if( outclickNodes[i] === el ){
			return i;
		}
	}
	return -1;
}

let destroy = ( el ) => {
	let idx = find( el );
	if( idx >= 0 ){
		delete el[optionName];
		outclickNodes.splice( idx , 1 );
	}
}

module.exports = {
	optionName,
	pushEl,
	find,
	onoutclick,
	destroy
};
