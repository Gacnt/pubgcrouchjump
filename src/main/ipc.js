import { ipcMain } from 'electron'
import { updateGlobalKey } from './util'

function init() {
    updateGlobalKey();
    ipcMain.on("UPDATE_GLOBAL_KEY", updateGlobalKey.bind(this));
}

export default init;