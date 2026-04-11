




const frequentVisits = document.querySelector(".visits");

let lastVisit = Number(window.localStorage.getItem("lastPageVisit-ls"));
const currentDay = Date.now();



if (lastVisit) {
    const milliseconds = today - parseInt(lastVisit);

    const msDay = 24 * 60 * 60 * 1000;
    const daysSince = Math.floor(milliseconds / msDay);

    if (daysSince == 0)
    {
        frequentVisits.textContent = `Back so soon! Awesome!`;
    }else if (daysSince == 1) {
        frequentVisits.textContent = `You last visited ${daysSince} day ago.`;
    }else {
        frequentVisits.textContent = `You last visited ${daysSince} days ago.`;
    }; 
}

frequentVisits.textContent = `Welcome! Let us know if you have questions.`;


localStorage.setItem("lastPageVisit-ls", currentDay);