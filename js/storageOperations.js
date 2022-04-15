function saveToLocalStorage() {
    const sectionTexts = [...document.querySelectorAll(".grid-text_area")].map(target => target.innerHTML);
    localStorage.setItem("sectionTexts", JSON.stringify(sectionTexts))

}

function displaySavedTexts() {
    const sectionTexts = JSON.parse(localStorage.getItem("sectionTexts"))
    if (sectionTexts) {
        [...document.querySelectorAll(".grid-text_area")].forEach((target, index) => target.innerHTML = sectionTexts[index])
    }
}

export { saveToLocalStorage, displaySavedTexts }