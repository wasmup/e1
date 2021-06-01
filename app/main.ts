import { app, BrowserWindow } from 'electron';

app.on('ready', () => {
    const mainWindow = new BrowserWindow();
    mainWindow.webContents.loadURL(`file://${__dirname}/index.html`);
})