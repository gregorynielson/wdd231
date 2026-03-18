

const container = document.querySelector("#cards")

async function getCompanyData() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    // console.log(data.companies);
    displayCompanies(data.companies);
    return data;
}

getCompanyData();

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        const container = document.querySelector("#cards");

        let card = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("p");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("p");

        img.src = company.image;
        img.alt = `${company.name} business logo.`
        img.loading = "lazy";
        name.innerHTML = `<span class="name">${company.name}</span>`;
        address.innerHTML = company.address;
        phone.innerHTML = company.phoneNumber;
        website.innerHTML = `<span class="website">${company.websiteUrl}</span>`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        container.appendChild(card);
    });

}

