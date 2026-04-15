const currentTemp = document.querySelector("#current-temp");
const conditions = document.querySelector("#weather-conditions");
const windSpeed = document.querySelector("#wind-speed");
const url = "https://api.openweathermap.org/data/2.5/forecast?lat=34.15&lon=-117.32&units=imperial&appid=241373847c264c52b03f545626b36b30"


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML =`<span class="event">Temperature:</span> ${data.list[23].main.temp}&deg;F`;
    conditions.innerHTML = `<span class="event">Conditions:</span> ${data.list[23].weather[0].main}`;
    windSpeed.innerHTML = `<span class="event">Wind Speed:</span> ${data.list[23].wind.speed} mph`;
}