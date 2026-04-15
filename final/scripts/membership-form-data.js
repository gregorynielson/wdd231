const getString = window.location.search;
console.log(getString);

const membershipInfo = new URLSearchParams(getString);


document.querySelector("#member-info").innerHTML = `
<p>Name: <span class="submit-content">${membershipInfo.get("firstname")} ${membershipInfo.get("lastname")}</span></p>
<p>Address: <span class="submit-content">${membershipInfo.get("street")}, ${membershipInfo.get("city")}, ${membershipInfo.get("state")} ${membershipInfo.get("zipcode")}</span></p>
<p>Email: <span class="submit-content">${membershipInfo.get("emailadd")}</span></p>
<p>Phone Number: <span class="submit-content">${membershipInfo.get("phonenum")}</span></p>
`


const membershipDisplay = document.querySelector(".num-memberships");

if (membershipDisplay) {
    let numMemberships = Number(window.localStorage.getItem("numMemberships-ls")) || 0;

    if (numMemberships !== 0) {
        membershipDisplay.innerHTML = `You have signed up for <span class="submit-content">${numMemberships}</span> Golfing to Give Memberships!`;
    } else {
        membershipDisplay.innerHTML = `Return to Join page to sign up for a membership!`;
    }

    numMemberships++;

    localStorage.setItem("numMemberships-ls", numMemberships);
}