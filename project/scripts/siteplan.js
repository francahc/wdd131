document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

    /* Add event listener to the weather form
    const weatherForm = document.getElementById("weatherForm");
    if (weatherForm) {
        weatherForm.addEventListener("submit", function(event) {
            event.preventDefault(); 
            const city = document.getElementById("city").value; 
            fetchWeather(city); 
        });
    } else {
        console.error("Weather form not found"); 
    }

    // Function to fetch weather data
    function fetchWeather(city) {
        const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("City not found");
                }
                return response.json();
            })
            .then(data => {
                const weatherResult = document.getElementById("weatherResult");
                weatherResult.innerHTML = `
                    <h3>Weather in ${data.name}</h3>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Condition: ${data.weather[0].description}</p>
                `;
            })
            .catch(error => {
                document.getElementById("weatherResult").innerText = error.message;
            });
    } */
});