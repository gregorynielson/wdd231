import {sponsors} from "../data/sponsors.mjs"


const container = document.querySelector("#sponsor-cards");

function displaySponsorCards(sponsor) {
    
    let card = document.createElement("div");
    let name = document.createElement("p");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("p");

    name.innerHTML = `<span class="sponsor-name">${sponsor.name}</span>`;
    address.innerHTML = sponsor.address;
    phone.innerHTML = sponsor.phone;
    website.innerHTML = sponsor.website;

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    return card;

}

sponsors.forEach(sponsor => {
    container.appendChild(displaySponsorCards(sponsor));
});


const filterGolf = document.querySelector("#golf-sponsor");
const filterNational = document.querySelector("#national-sponsor");
const filterLocal = document.querySelector("#local-sponsor");

filterGolf.addEventListener("click", () => {
    let golf = sponsors.filter(sponsor => {
        const level = sponsor.level;
        return level === "golf";
    })
    container.innerHTML = "";
    golf.forEach(sponsor => {
        container.appendChild(displaySponsorCards(sponsor));
    })
});

filterNational.addEventListener("click", () => {
    let national = sponsors.filter(sponsor => {
        const level = sponsor.level;
        return level === "national";
    })
    container.innerHTML = "";
    national.forEach(sponsor => {
        container.appendChild(displaySponsorCards(sponsor));
    })
});

filterLocal.addEventListener("click", () => {
    let local = sponsors.filter(sponsor => {
        const level = sponsor.level;
        return level === "local";
    })
    container.innerHTML = "";
    local.forEach(sponsor => {
        container.appendChild(displaySponsorCards(sponsor));
    })
});