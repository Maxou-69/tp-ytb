console.log("js fonctionnel")

let dark_mode = document.querySelector("label");
dark_mode.addEventListener("click", (e) => {
    e.document.body.target.classList.toogle("dark-mode");
})