console.log("js fonctionnel")

const body = document.querySelector("body");
const titres = document.querySelectorAll("h3");
const iframes = document.querySelectorAll("iframe");
const checkbox = document.querySelector("#checkbox");
const navbar = document.querySelector("nav");

checkbox.addEventListener('click', function () {

    body.classList.toggle("darkmode");
    navbar.classList.toggle("darkmode");
    titres.forEach(titre => {
        titre.classList.toggle("darkmode");
    })
    iframes.forEach(iframe => {
        iframe.classList.toggle("darkmode");
    })

    console.log("bouton fonctionnel")

})

//  1. Enregistrer une video youtube dans le localStorage
function save() {
    let iframe = document.getElementById("iframecode").value
    window.localStorage.setItem("iframe" + (+new Date()), iframe);
    window.location.reload()
};

// 2. Chargement des videos enregistrés
window.onload = function load() {
    let iframes = { ...localStorage };
    let html = "";
    for ([key, iframe] of Object.entries(iframes)) {
        html += iframe + `<button class="delete" style="position:relative; left:-30px; top:-10px" data-key="${key}">X</button>`

    };

    document.querySelector('.video-play').innerHTML = html;

    document.querySelectorAll('button.delete').forEach((button) => {
        button.addEventListener("click", () => {
            window.localStorage.removeItem(button.dataset.key);
            window.location.reload();
        })
    })

}