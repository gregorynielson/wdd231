const getString = window.location.search;
console.log(getString);

const charityInfo = new URLSearchParams(getString);


document.querySelector("#charity-info").innerHTML = `
<p>Charity Name: <span class="submit-content">${charityInfo.get("namecharity")}</span></p>
<p>Contact Name: <span class="submit-content">${charityInfo.get("charitycontact")}</span></p>
<p>Contact Phone Number: <span class="submit-content">${charityInfo.get("phone")}</span></p>
<p>Contact Email: <span class="submit-content">${charityInfo.get("e-mail")}</span></p>
`


const charityDisplay = document.querySelector(".num-charity");

if (charityDisplay) {
    let numCharity = Number(window.localStorage.getItem("numCharities-ls")) || 0;

    if (numCharity !== 0) {
        charityDisplay.innerHTML = `You have nominated <span class="submit-content">${numCharity}</span> charities!`;
    } else {
        charityDisplay.innerHTML = `Return to Join page to nominate a charity!`;
    }

    numCharity++;

    localStorage.setItem("numCharities-ls", numCharity);
}