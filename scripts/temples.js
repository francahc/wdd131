document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;


function updateFooter() {
    const footer = document.querySelector('footer');
    const year = new Date().getFullYear();
    const lastModified = document.lastModified;
    footer.innerHTML = `&copy; ${year} | Last Modified: ${lastModified}`;
}


const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');


hamburger.addEventListener('click', () => {
    if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none'; 
    } else {
        navMenu.style.display = 'flex'; 
    }
});

