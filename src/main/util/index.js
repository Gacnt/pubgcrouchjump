import winsendkey from 'winsendkeynode'
import settings from 'electron-settings'
import _ from 'lodash'
import { globalShortcut } from 'electron'

const KEYMODIFIERS = {
    ALT: 1,
    CTRL: 2,
    SHIFT: 3,
    WIN: 4,
};

export const updateGlobalKey = () => {
    let key = settings.get("keys");
    let accelerator = "";

    console.log("Registering Key");

    if (_.has(key, "modifier")) {
        if (key.modifier&KEYMODIFIERS.ALT !== 0) {
            accelerator += "Alt+";
        }
        if (key.modifier&KEYMODIFIERS.CTRL !== 0) {
            accelerator += "Ctrl+";
        } 
        if (key.modifier&KEYMODIFIERS.SHIFT !== 0) {
            accelerator += "Shift+";
        }
        if (key.modifier&KEYMODIFIERS.WIN !== 0) {
            accelerator += "Win+";
        }
    }

    if (_.has(key, "trigger")) {
        accelerator += key.trigger;
    }

    if (accelerator === "") return;

    globalShortcut.unregisterAll();
    globalShortcut.register(accelerator, sendKey.bind(this));
}

function sendKey() {
    let key = settings.get("keys");

    if (_.has(key, 'jump') && _.has(key, 'crouch')) {
        winsendkey.sendKey(key.jump.key);
        winsendkey.sendKey(key.crouch.key);
    }
}