document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

    const weatherForm = document.getElementById("weatherForm");
    const cityNameDisplay = document.getElementById("cityNameDisplay");
    const weatherResult = document.getElementById("weatherResult");
    const weatherIcon = document.getElementById("weatherIcon");

    weatherForm.addEventListener("submit", async function(event) {
        event.preventDefault();
        const city = document.getElementById("city").value.trim();
        
        if (city) {
            cityNameDisplay.textContent = `${city}`;
            await getCityWeatherAndTime(city);
        } else {
            cityNameDisplay.textContent = "Please enter a city name.";
        }
    });

    async function getCityWeatherAndTime(city) {
        try {
            const apiKey = "f7d941b736ec44d90f9fdd45174ca005"; 
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

            if (!response.ok) throw new Error("City not found");

            const data = await response.json();
            const timezoneOffset = data.timezone;
            const localTime = new Date(Date.now() + timezoneOffset * 1000);
            
            const hour = localTime.getUTCHours();
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            weatherResult.innerHTML = `
                <p>Local Time: ${localTime.toLocaleString("en-US", { timeZone: "UTC" })}</p>
                <p>Temperature: ${temperature} °C</p>
                <p>Weather: ${description}</p>
            `;

            const weatherCondition = data.weather[0].main;
            let iconSrc = "";
            const isDaytime = hour >= 6 && hour < 18;

            switch (weatherCondition) {
                case "Clear":
                    iconSrc = isDaytime ? "images/sun.svg" : "images/moon.svg";
                    break;
                case "Clouds":
                    iconSrc = isDaytime ? "images/sun-cloud.svg" : "images/moon-storm.svg";
                    break;
                case "Rain":
                    iconSrc = "images/rain.svg";
                    break;
                default:
                    iconSrc = "";
            }

            weatherIcon.src = iconSrc;
            weatherIcon.style.display = iconSrc ? "block" : "none";
            await getThreeDayForecast(city);

        } catch (error) {
            cityNameDisplay.textContent = `Error: ${error.message}`;
            weatherResult.textContent = "";
            console.error("Error fetching city time:", error);
        }
    }

    function getDayName(date) {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return daysOfWeek[date.getDay()];
    }

    async function getThreeDayForecast(city) {
        try {
            const apiKey = "f7d941b736ec44d90f9fdd45174ca005"; 
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
            
            if (!response.ok) throw new Error("Forecast not found");
            
            const data = await response.json();
            const forecastDiv = document.getElementById("threeDayForecast");
            forecastDiv.innerHTML = ''; 

            for (let i = 0; i < 3; i++) {
                const dayData = data.list[i * 8];
                const date = new Date(dayData.dt * 1000);
                const dayName = getDayName(date);
                const temp = dayData.main.temp;
                const description = dayData.weather[0].description;
                const iconCode = dayData.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

                forecastDiv.innerHTML += `
                    <div class="forecast-day">
                        <strong>${dayName}</strong>
                        <p>Temperature: ${temp} °C</p>
                        <p>Weather: ${description}</p>
                        <img src="${iconUrl}" alt="${description} icon" style="width: 50px; height: 50px;">
                    </div>
                `;
            }
            
        } catch (error) {
            console.error("Error fetching forecast:", error);
        }
    }
});
