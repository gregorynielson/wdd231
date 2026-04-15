const getString = window.location.search;
console.log(getString);

const sponsorInfo = new URLSearchParams(getString);

document.querySelector("#sponsor-info").innerHTML = `
<p>Business Name: <span class="submit-content">${sponsorInfo.get("namesponsor")}</span></p>
<p>Business Address: <span class="submit-content">${sponsorInfo.get("bizstreet")}, ${sponsorInfo.get("bizcity")}, ${sponsorInfo.get("bizstate")} ${sponsorInfo.get("bizzipcode")}</span></p>
<p>Contact Name: <span class="submit-content">${sponsorInfo.get("bizcontact")}</span></p>
<p>Contact Phone Number: <span class="submit-content">${sponsorInfo.get("bizphone")}</span></p>
<p>Contact Email: <span class="submit-content">${sponsorInfo.get("bizemail")}</span></p>
`


const sponsorDisplay = document.querySelector(".num-sponsor");

if (sponsorDisplay) {
    let numSponsor = Number(window.localStorage.getItem("numSponsor-ls")) || 0;

    if (numSponsor !== 0) {
        sponsorDisplay.innerHTML = `You have registered for <span class="submit-content">${numSponsor}</span> sponsorships!`;
    } else {
        sponsorDisplay.innerHTML = `Return to Join page to register to be a sponsor!`;
    }

    numSponsor++;

    localStorage.setItem("numSponsor-ls", numSponsor);
}