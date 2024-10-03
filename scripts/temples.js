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

// Obtener referencias a los elementos
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Agregar evento de clic al botón de hamburguesa
hamburger.addEventListener('click', () => {
    // Alternar la visibilidad del menú de navegación
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
});
