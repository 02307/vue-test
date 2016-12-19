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
	setMenu();
	setTray(); 
	defineProtocal();
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
	mainWin.loadURL(url.format({
		pathname : path.resolve( __dirname , 'static/index.html' ),
		protocal : 'file',
		slashes : true
	}));
}

let setMenu = () => {
	let menu = Menu.buildFromTemplate([
		{
			label : 'Edit',
			submenu : [
				{
					role : 'undo'
				},
				{
					role : 'redo'
				},
				{
					type : 'separator'
				},
				{
					role : 'cut'
				},
				{
					role : 'copy'
				},
				{
					role : 'paste'
				},
				{
					role : 'selectall'
				}
			]
		},
		{
			label : 'View',
			submenu : [
				{
					role : 'toggledevtools'
				},
				{
					role : 'togglefullscreen'
				}
			]
		},
		{
			label : 'Quit',
			role : 'close'
		}
	]);
	Menu.setApplicationMenu( menu );
}

let setTray = () => {
	let tray = new Tray( path.resolve( __dirname , 'build/icon.ico' ) );
	let menu = Menu.buildFromTemplate([
		{
			label : 'Quit',
			role : 'quit'
		}
	]);
	tray.setToolTip( 'a election app created by vue' );
	tray.setContextMenu( menu )
}

let defineProtocal = () => {
    protocol.registerFileProtocol('atom', (request, callback) => {
    	console.log( 'url' , url );
		let url = request.url.substr(7);
		callback({
			path: path.resolve( __dirname , url )
		});
    });
}