document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

function updateFooter() {
    const footer = document.querySelector('footer');
    const year = new Date().getFullYear();
    const lastModified = document.lastModified;
    footer.innerHTML = `&copy; ${year} | Last Modified: ${lastModified}`;
}


const tempC = 9;
const windSpeedKmh = 6; 

function calculateWindChill(temp, speed) {
   
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2);
}


if (tempC <= 10 && windSpeedKmh > 4.8) {
    const windChill = calculateWindChill(tempC, windSpeedKmh);
    document.getElementById("windchill").textContent = `${windChill} °C`;
} else {
    document.getElementById("windchill").textContent = "N/A";
}

