const nonProfitModal = document.querySelector("#non-profit");
const openNonProfitModal = document.querySelector(".open-non-profit");
const closeNonProfitModal = document.querySelector(".close-non-profit");

openNonProfitModal.addEventListener("click", () => {
    nonProfitModal.showModal();
});

closeNonProfitModal.addEventListener("click", () => {
    nonProfitModal.close();
});



const bronzeModal = document.querySelector("#bronze-member");
const openBronzeModal = document.querySelector(".open-bronze");
const closeBronzeModal = document.querySelector(".close-bronze");

openBronzeModal.addEventListener("click", () => {
    bronzeModal.showModal();
});

closeBronzeModal.addEventListener("click", () => {
    bronzeModal.close();
});


const silverModal = document.querySelector("#silver-member");
const openSilverModal = document.querySelector(".open-silver");
const closeSilverModal = document.querySelector(".close-silver");

openSilverModal.addEventListener("click", () => {
    silverModal.showModal();
});

closeSilverModal.addEventListener("click", () => {
    silverModal.close();
});


const goldModal = document.querySelector("#gold-member");
const openGoldModal = document.querySelector(".open-gold");
const closeGoldModal = document.querySelector(".close-gold");

openGoldModal.addEventListener("click", () => {
    goldModal.showModal();
});

closeGoldModal.addEventListener("click", () => {
    goldModal.close();
});

