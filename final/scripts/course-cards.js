
const container = document.querySelector("#card-track")

async function getCourseData() {
    const response = await fetch("data/courses.json");
    const data = await response.json();
    // console.log(data.companies);
    displayCourses(data.courses);
    return data;
}

getCourseData();

const displayCourses = (courses) => {
    courses.forEach((course) => {
        const container = document.querySelector("#card-track");

        let card = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("p");
        let par = document.createElement("p");
        let address = document.createElement("p");
        let sponsor = document.createElement("p");

        img.src = course.picture;
        img.alt = `photo of ${course.name}`;
        img.loading = "lazy";
        name.innerHTML = `<span class="course-card-name">${course.name}</span>`;
        par.innerHTML = `<b>Par:</b> ${course.par}`;
        address.innerHTML = course.address;
        sponsor.innerHTML = `<b>Main Sponsor:</b> ${course.sponsor}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(par);
        card.appendChild(sponsor);

        container.appendChild(card);
    })
    container.innerHTML += container.innerHTML;
}