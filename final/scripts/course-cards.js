
import {courses} from "../data/courses.mjs"


const container = document.querySelector("#card-track");
const displayCourses = (courses) => {
    courses.forEach((course) => {
        

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

        img.classList.add("course-img");
        name.classList.add("course-name");
        par.classList.add("course-par");
        address.classList.add("course-address");
        sponsor.classList.add("course-sponsor");


        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(par);
        card.appendChild(sponsor);

        container.appendChild(card);
        
    });
    container.innerHTML += container.innerHTML;
}

displayCourses(courses);