import keyBinds from "./keyBindings.js";
import storageAvailable from "./storageAvailable.js";
import { displaySavedTexts } from "./storageOperations.js";


/**
 * [Keydown event: ESCAPE]
 * Pressing escape will remove focus from all notepad components
 * 
 * [Keydown event: Tab]
 * Pressing tab will insert a tabspace
 */

if (storageAvailable('localStorage')) {
    displaySavedTexts();
    document.addEventListener("keydown", keyBinds)
}
else {
    alert("Local Storage not available")
}
