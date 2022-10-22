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
