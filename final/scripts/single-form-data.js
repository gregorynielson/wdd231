const getString = window.location.search;
console.log(getString);

const singleInfo = new URLSearchParams(getString);
console.log(singleInfo.get("selection"))

document.querySelector("#single-info").innerHTML = `
<p>Name: <span class="submit-content">${singleInfo.get("namefirst")} ${singleInfo.get("namelast")}</span></p>
<p>Phone Number: <span class="submit-content">${singleInfo.get("numphone")}</span></p>
<p>Email: <span class="submit-content">${singleInfo.get("emailaddress")}</span></p>
<p>Tournament Entered: <span class="submit-content">${singleInfo.get("selection")}</span></p>
`


const singleDisplay = document.querySelector(".num-single");

if (singleDisplay) {
    let numSingle = Number(window.localStorage.getItem("numSingle-ls")) || 0;

    if (numSingle !== 0) {
        singleDisplay.innerHTML = `You have entered <span class="submit-content">${numSingle}</span> tournaments!`;
    } else {
        singleDisplay.innerHTML = `Return to Join page to enter a tournament!`;
    }

    numSingle++;

    localStorage.setItem("numSingle-ls", numSingle);
}