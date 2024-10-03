document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

// Function to update footer year and last modified date
function updateFooter() {
    const footer = document.querySelector('footer');
    const year = new Date().getFullYear();
    const lastModified = document.lastModified;
    footer.innerHTML = `&copy; ${year} | Last Modified: ${lastModified}`;
}

// Hamburger menu functionalit

// Obtener referencias al botón hamburguesa y al menú de navegación
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

// Agregar evento al botón hamburguesa
hamburger.addEventListener('click', () => {
    if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none'; // Ocultar el menú
    } else {
        navMenu.style.display = 'flex'; // Mostrar el menú
    }
});

