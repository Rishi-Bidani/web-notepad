import keyBinds from "./keyBindings.js";
import storageAvailable from "./storageAvailable.js";
import { displaySavedTexts } from "./storageOperations.js";

function userLightMode() {
    const root = document.documentElement;
    root.style.setProperty("--bg-color", "#f7f7f7");
    root.style.setProperty("--text-color", "#0d1117");
    root.style.setProperty("--bg-color", "#f7f7f7");
}


(function printKeyboardShortcuts() {

    function Shortcut(key, description) {
        this.key = key;
        this.description = description;
    }

    console.log("%cKeyboard shortcuts", "font-weight: bold; font-size: 1.5rem; text-decoration: underline; color: hotpink");
    const shortcuts = `
    Escape: Remove focus from all notepad components
    Tab: Insert a tabspace (number of spaces can be altered from settings)
    Ctrl + s: Save to local storage
    Ctrl + Alt + c: Clear all notes
    Shift + right arrow: Move to next note
    Shift + left arrow: Move to previous note
    Alt + s: Settings
    `

    // Table form
    const shortcutList = [...shortcuts.trim().split("\n").map(line => new Shortcut(line.trim().split(":")[0], line.trim().split(":")[1]))]
    console.table(shortcutList, ["key", "description"]);


    // Normal test form
    const shortcutsText = shortcuts.trim().split("\n").map(line => {
        return "%c" + line.trim().split(":")[0] + ":" + "%c" + line.trim().split(":")[1]
    }).join("\n");
    const styles = Array(shortcuts.trim().split("\n").length).fill(["line-height: 1.5rem; color: hotpink", "color: white;"]).flat()
    console.log(shortcutsText, ...styles)

})();

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
