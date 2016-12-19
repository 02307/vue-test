let handles = {};
let channels = {};
let noop = () => {};


let ipcReq = exports.sendTalk = ( ipc , channel ) => {
	if( channels[channel] )return;
	channels[channel] = true;
	let talk;

	ipc.on( channel , ( event , msg ) => {
		msg = escapeMsg( msg );
		let handle = handles[msg.evtType] || noop;
		handle( event , msg.msg );
		delete handles[evtType];
	});

	let send = ( id , msg ) => {
		let evtType = channel + id;
		ipc.send( channel , `${evtType}==>${msg}` );
		return talk;
	}

	let get = () => {
		return talk;
	}

	talk = { send , get };
	return talk;
}

let ipcRes = exports.getTalk = ( ipc , channel ) => {
	ipc.on( 'channel' , )
}

let storeHandle = ( evtType , handle ) => {
	handles[evtType] = handle;
}

let escapeMsg = msg => {
	let idx = msg.indexOf( '==>' );
	let evtType = msg.substr( 0 , idx )
	return {
		evtType,
		msg : msg.substr( idx + 3 )
	};
}

let getMsg = ( evtType , msg ) => {
}