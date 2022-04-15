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

    // Ctrl + Alt + r => clear all notes
    if (event.ctrlKey && event.altKey && event.key === "c") {
        event.preventDefault();
        [...document.querySelectorAll(".grid-text_area")].map(target => target.innerHTML = "")
        alert("Changes haven't been saved, if this was a mistake just refresh. Otherwise make sure to Ctrl + S to save your changes.")
    }

    //  Shift + right arrow => move to next note
    if (event.shiftKey && event.key === "ArrowRight") {
        event.preventDefault();
        const currentNote = event.target;
        const nextNote = currentNote.nextElementSibling;
        if (nextNote) nextNote.focus();
    }

    // Shift + left arrow => move to previous note
    if (event.shiftKey && event.key === "ArrowLeft") {
        event.preventDefault();
        const currentNote = event.target;
        const previousNote = currentNote.previousElementSibling;
        if (previousNote) previousNote.focus();
    }

}