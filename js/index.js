import keyBinds from "./keyBindings.js";
import storageAvailable from "./storageAvailable.js";
import { displaySavedTexts } from "./storageOperations.js";

function userLightMode() {
    const root = document.documentElement;
    root.style.setProperty("--bg-color", "#f7f7f7");
    root.style.setProperty("--text-color", "#0d1117");
    root.style.setProperty("--bg-color", "#f7f7f7");
}

/**
 * [Keydown event: ESCAPE]
 * Pressing escape will remove focus from all notepad components
 * 
 * [Keydown event: Tab]
 * Pressing tab will insert a tabspace
 * 
 * [Keydown event: Ctrl + S]
 * Pressing Ctrl + S will save the notes to local storage
 * 
 * [Keydown event: Ctrl + Alt + c]
 * Pressing Ctrl + Alt + r will clear all notes
 * 
 * [Keydown event: Shift + ArrowRight]
 * Pressing Shift + ArrowRight will move to next note
 * 
 * [Keydown event: Shift + ArrowLeft]
 * Pressing Shift + ArrowLeft will move to previous note
 */

if (storageAvailable('localStorage')) {
    displaySavedTexts();
    if (localStorage.getItem("theme") === "light") userLightMode()
    document.addEventListener("keydown", keyBinds)
}
else {
    alert("Local Storage not available")
}
