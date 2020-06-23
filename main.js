const { app, BrowserWindow } = require('electron');

function createWindows() {
  let mainWin = new BrowserWindow({ width: 300, height: 300, frame: false });
  mainWin.loadFile('index.html');
  mainWin.on('close', () => {
    mainWin = null;
  });
}

app.on('ready', () => {
  createWindows();
});
