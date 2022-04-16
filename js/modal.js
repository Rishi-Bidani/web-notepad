const modal = document.querySelector(".modal--settings");
const modalSave = document.querySelector("#btn-save");

function openModal() {
    modal.showModal()
    const tabSizeInput = document.querySelector("#tab-size");
    tabSizeInput.value = localStorage.getItem("tabSpace") || 4;

    const darkModeInput = document.querySelector("#theme-preferece");
    const darkModeDetection = localStorage.getItem("theme") === "dark" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log(darkModeDetection)
    darkModeInput.checked = darkModeDetection;

    modalSave.addEventListener("click", () => {
        const tabSize = tabSizeInput.value;
        const darkMode = darkModeInput.checked;
        localStorage.setItem("tabSpace", tabSize);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
        modal.close();
    })

}

export { openModal }