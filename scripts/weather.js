
function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2);
}


function showWeather() {
    const tempC = 9; 
    const windSpeedKmh = 6; 

    if (tempC <= 10 && windSpeedKmh > 4.8) {
        const windChill = calculateWindChill(tempC, windSpeedKmh);
        document.getElementById("windchill").textContent = `${windChill} °C`;
    } else {
        document.getElementById("windchill").textContent = "N/A";
    }
}
