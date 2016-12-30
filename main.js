const {
	app,
	BrowserWindow,
	globalShortcut,
	net,
	session,
	dialog,
	ipcMain : ipc,
	Menu,
	protocal,
	powerSaveBlocker,
	Tray
} = require( 'electron' );
const url = require( 'url' );
const path = require( 'path' );
const cp = require( './utils/promiseHelp.js' );
let mainWin;
let tray;


cp( app )( 'ready' ).then( initApp );

cp( app )( 'window-all-closed' ).then( () => app.quit() );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
cp( app )( 'active' ).then( () => {
	if( !mainWin ){
		app.quit();
	} 
});

function initApp(){
	createWindow();
}

let createWindow = () => {
	mainWin = new BrowserWindow({
		show : false,
		width : 1200,
		height : 768,
		minWidth : 1080,
		minHeight : 720,
		toolbar : false
	});

	cp( mainWin )( 'ready-to-show' , () => mainWin.show() );
	mainWin.loadURL( 'http://localhost:900' );
}
