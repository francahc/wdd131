document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

// Function to update footer year and last modified date
function updateFooter() {
    const footer = document.querySelector('footer');
    const year = new Date().getFullYear();
    const lastModified = document.lastModified;
    footer.innerHTML = `&copy; ${year} | Last Modified: ${lastModified}`;
}

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '&#9776;'; // Hamburger icon
    const nav = document.querySelector('nav');
    nav.insertBefore(hamburger, nav.firstChild); // Insert hamburger before nav

    hamburger.addEventListener('click', () => {
        const menu = nav.querySelector('ul');
        menu.classList.toggle('show'); // Toggle menu visibility
        hamburger.innerHTML = menu.classList.contains('show') ? '&times;' : '&#9776;'; // Change to 'X' when open
    });

    updateFooter(); // Update footer with year and last modified date
});

