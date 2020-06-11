// Modules to control application life and create native browser window
const {app, shell, BrowserWindow} = require('electron')

const nativeImage = require('electron').nativeImage;
    var image = nativeImage.createFromPath(__dirname + '/img/project_logo.png'); 
    image.setTemplateImage(true);
    
const path = require('path')

function createWindow () {
  // Create the browser window.

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    icon: image,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // This is the actual solution
mainWindow.webContents.on("new-window", function(event, url) {
  event.preventDefault();
  console.log(url)
  if(url==='about.html'){
    const mainWindow2 = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    icon: image,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }})
    // and load the index.html of the app.
    mainWindow2.loadFile('./about.html')
    //mainWindow2.setMenuBarVisibility(false)
  }


  //shell.openExternal(url);
});

  //mainWindow.setMenuBarVisibility(false)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

