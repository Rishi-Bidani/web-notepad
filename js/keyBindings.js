import { saveToLocalStorage } from "./storageOperations.js";

const tabSpace = 4;

/**
 * [Keydown event: ESCAPE]
 * Pressing escape will remove focus from all notepad components
 * 
 * [Keydown event: Tab]
 * Pressing tab will insert a tabspace
 */
export default function keyBinds(event) {
    if (event.key === "Escape") {
        [...document.querySelectorAll(".grid-text_area")].forEach(target => target.blur())
    }

    if (event.key === "Tab") {
        event.preventDefault();

        const editor = event.target
        const doc = editor.ownerDocument.defaultView;
        const sel = doc.getSelection();
        const range = sel.getRangeAt(0);
        const tabNode = document.createTextNode(Array(tabSpace + 1).join("\u00a0"));
        range.insertNode(tabNode);
        range.setStartAfter(tabNode);
        range.setEndAfter(tabNode);
        sel.removeAllRanges();
        sel.addRange(range);
    }

    // if (event.altKey && event.key === "s") {
    //     event.preventDefault()

    // }

    // Ctrl + S
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        try {
            saveToLocalStorage();
            alert("Saved to local storage")
        }
        catch (error) {
            alert(error)
        }
    }
}