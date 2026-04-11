import {places} from "../data/places.mjs"

// const container = document.querySelector("#place-cards");



const displayPlaces = (places) => {
    places.forEach((place) => {
        const container = document.querySelector("#place-cards");

        let card = document.createElement("div");
        let name = document.createElement("h2");
        let description = document.createElement("p");
        let address = document.createElement("address");
        let photo = document.createElement("figure");
        let img = document.createElement("img");
        let button = document.createElement("button");

        name.innerHTML = place.name;
        description.innerHTML = place.description;
        address.innerHTML = place.address;
        img.src = place.photo;
        img.alt = `picture of ${place.name}`;
        img.loading = "lazy";
        button.textContent = "Learn More";
        button.classList.add(place.class);

        photo.appendChild(img);

        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(photo);
        card.appendChild(button);

        container.appendChild(card);

    });
}

displayPlaces(places);