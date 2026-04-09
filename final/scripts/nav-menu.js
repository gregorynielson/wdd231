
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");
const secondnav = document.querySelector(".menu-list");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
    secondnav.classList.toggle("show");
})