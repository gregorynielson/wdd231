

const container = document.querySelector("#cards")

async function getCompanyData() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    
    const randomOrder = data.companies.sort(() => 0.5 - Math.random());
    // // console.log(data.companies);
    displayCompanies(randomOrder);
    return data;
}


const displayCompanies = (companies) => {
    
    let index = 0
    let displayed = 0

    while (index < companies.length && displayed < 3)
    {
        const company = companies[index]
        if (company.level > 1)
        {
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

            displayed++;
        };
        index++;
    };

}


getCompanyData();