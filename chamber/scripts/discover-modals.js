import {places} from "../data/places.mjs"

const marinaModal = document.querySelector("#marinamodal");
const openMarina = document.querySelector(".marina");
const closeMarina = document.querySelector(".closemarina");
const marinah3 = document.querySelector(".marinah3");
const marinaHours = document.querySelector(".marinahours");
const marinaCost = document.querySelector(".marinacost");

marinah3.innerHTML = places[0].name;
marinaHours.innerHTML = `<span class="hours-cost">Hours:</span> ${places[0].hours}`;
marinaCost.innerHTML = `<span class="hours-cost">Cost:</span> ${places[0].cost}`;

openMarina.addEventListener("click", () => {
    marinaModal.showModal();
});
closeMarina.addEventListener("click", () => {
    marinaModal.close();
});



const lakeshoreModal = document.querySelector("#lakeshoremodal");
const openLakeshore = document.querySelector(".lakeshore");
const closeLakeshore = document.querySelector(".closelakeshore");
const lakeshoreh3 = document.querySelector(".lakeshoreh3");
const lakeshoreHours = document.querySelector(".lakeshorehours");
const lakeshoreCost = document.querySelector(".lakeshorecost");

lakeshoreh3.innerHTML = places[1].name;
lakeshoreHours.innerHTML = `<span class="hours-cost">Hours:</span> ${places[1].hours}`;
lakeshoreCost.innerHTML = `<span class="hours-cost">Cost:</span> ${places[1].cost}`;

openLakeshore.addEventListener("click", () => {
    lakeshoreModal.showModal();
});
closeLakeshore.addEventListener("click", () => {
    lakeshoreModal.close();
});



const marketModal = document.querySelector("#marketmodal");
const openMarket = document.querySelector(".market");
const closeMarket = document.querySelector(".closemarket");
const marketh3 = document.querySelector(".marketh3");
const marketHours = document.querySelector(".markethours");
const marketCost = document.querySelector(".marketcost");

marketh3.innerHTML = places[2].name;
marketHours.innerHTML = `<span class="hours-cost">Hours:</span> ${places[2].hours}`;
marketCost.innerHTML = `<span class="hours-cost">Cost:</span> ${places[2].cost}`;

openMarket.addEventListener("click", () => {
    marketModal.showModal();
});
closeMarket.addEventListener("click", () => {
    marketModal.close();
});



const lighthouseModal = document.querySelector("#lighthousemodal");
const openLighthouse = document.querySelector(".lighthouse");
const closeLighthouse = document.querySelector(".closelighthouse");
const lighthouseh3 = document.querySelector(".lighthouseh3");
const lighthouseHours = document.querySelector(".lighthousehours");
const lighthouseCost = document.querySelector(".lighthousecost");

lighthouseh3.innerHTML = places[3].name;
lighthouseHours.innerHTML = `<span class="hours-cost">Hours:</span> ${places[3].hours}`;
lighthouseCost.innerHTML = `<span class="hours-cost">Cost:</span> ${places[3].cost}`;

openLighthouse.addEventListener("click", () => {
    lighthouseModal.showModal();
});
closeLighthouse.addEventListener("click", () => {
    lighthouseModal.close();
});



const baysideModal = document.querySelector("#baysidemodal");
const openBayside = document.querySelector(".bayside");
const closeBayside = document.querySelector(".closebayside");
const baysideh3 = document.querySelector(".baysideh3");
const baysideHours = document.querySelector(".baysidehours");
const baysideCost = document.querySelector(".baysidecost");

baysideh3.innerHTML = places[4].name;
baysideHours.innerHTML = `<span class="hours-cost">Hours:</span> ${places[4].hours}`;
baysideCost.innerHTML = `<span class="hours-cost">Cost:</span> ${places[4].cost}`;

openBayside.addEventListener("click", () => {
    baysideModal.showModal();
});
closeBayside.addEventListener("click", () => {
    baysideModal.close();
});



const museumModal = document.querySelector("#museummodal");
const openMuseum = document.querySelector(".museum");
const closeMuseum = document.querySelector(".closemuseum");
const museumh3 = document.querySelector(".museumh3");
const museumHours = document.querySelector(".museumhours");
const museumCost = document.querySelector(".museumcost");

museumh3.innerHTML = places[5].name;
museumHours.innerHTML = `<span class="hours-cost">Hours:</span> ${places[5].hours}`;
museumCost.innerHTML = `<span class="hours-cost">Cost:</span> ${places[5].cost}`;

openMuseum.addEventListener("click", () => {
    museumModal.showModal();
});
closeMuseum.addEventListener("click", () => {
    museumModal.close();
});



const willowModal = document.querySelector("#willowmodal");
const openWillow = document.querySelector(".willow");
const closeWillow = document.querySelector(".closewillow");
const willowh3 = document.querySelector(".willowh3");
const willowHours = document.querySelector(".willowhours");
const willowCost = document.querySelector(".willowcost");

willowh3.innerHTML = places[6].name;
willowHours.innerHTML = `<span class="hours-cost">Hours:</span> ${places[6].hours}`;
willowCost.innerHTML = `<span class="hours-cost">Cost:</span> ${places[6].cost}`;

openWillow.addEventListener("click", () => {
    willowModal.showModal();
});
closeWillow.addEventListener("click", () => {
    willowModal.close();
});



const pierModal = document.querySelector("#piermodal");
const openPier = document.querySelector(".pier");
const closePier = document.querySelector(".closepier");
const pierh3 = document.querySelector(".pierh3");
const pierHours = document.querySelector(".pierhours");
const pierCost = document.querySelector(".piercost");

pierh3.innerHTML = places[7].name;
pierHours.innerHTML = `<span class="hours-cost">Hours:</span> ${places[7].hours}`;
pierCost.innerHTML = `<span class="hours-cost">Cost:</span> ${places[7].cost}`;

openPier.addEventListener("click", () => {
    pierModal.showModal();
});
closePier.addEventListener("click", () => {
    pierModal.close();
});