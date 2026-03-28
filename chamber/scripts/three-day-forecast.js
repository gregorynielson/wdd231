const todayWeather = document.querySelector("#today-weather");
const secondDay = document.querySelector("#second-day-weather");
const thirdDay = document.querySelector("#third-day-weather");

const threeDayUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=41.72&lon=-83.70&units=imperial&appid=241373847c264c52b03f545626b36b30"


async function threeDayApiFetch() {
    try {
        const threeResponse = await fetch(threeDayUrl);
        if (threeResponse.ok) {
            const threeData = await threeResponse.json();
            console.log(threeData);
            displayThreeDayResults(threeData);
        } else {
            throw Error(await threeResponse.text());
        }
    } catch (error) {
        console.log(error);
    }
}

threeDayApiFetch();

function displayThreeDayResults(threeData) {
    todayWeather.innerHTML = `March 29th: ${threeData.list[4].main.temp}&deg;F`;
    secondDay.innerHTML = `March 30th: ${threeData.list[12].main.temp}&deg;F`;
    thirdDay.innerHTML = `March 31st: ${threeData.list[20].main.temp}&deg;F`;

}
