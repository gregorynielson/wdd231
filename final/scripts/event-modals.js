
const allEvents = document.querySelector("#every-event");
const openAllEvents = document.querySelector("#all-events");
const closeAllEvents = document.querySelector(".close-event");

openAllEvents.addEventListener("click", () => {
    allEvents.showModal();
});

closeAllEvents.addEventListener("click", () => {
    allEvents.close();
});