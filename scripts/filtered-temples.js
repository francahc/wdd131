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


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Concepción Chile Temple",
      location: "Concepción, Bio-Bio, Chile",
      dedicated: "2018, October, 28",
      area: 23095,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/concepcion-chile-temple/concepcion-chile-temple-273-main.jpg"
    },
    {
      templeName: "Hong Kong China Temple",
      location: "Kowloon Tong, Kowloon City, Hong Kong",
      dedicated: "1996, May, 26",
      area: 51921,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
    },
    {
      templeName: "Córdoba Argentina Temple",
      location: "Córdoba, Argentina",
      dedicated: "2015, May, 17",
      area: 34369,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-11093-main.jpg"
    }
];


function createTempleCards(filteredTemples) {
    const templesContainer = document.querySelector('.grid-container');
    templesContainer.innerHTML = '';  

    filteredTemples.forEach((temple) => {
        const card = document.createElement('div');
        card.classList.add('temple-card');

        
        const templeName = document.createElement('h3');
        templeName.textContent = temple.templeName;
        card.appendChild(templeName);

        
        const templeLocation = document.createElement('p');
        templeLocation.textContent = `Location: ${temple.location}`;
        card.appendChild(templeLocation);

       
        const templeDedication = document.createElement('p');
        templeDedication.textContent = `Dedicated: ${temple.dedicated}`;
        card.appendChild(templeDedication);

       
        const templeArea = document.createElement('p');
        templeArea.textContent = `Area: ${temple.area} sq ft`;
        card.appendChild(templeArea);

        
        const templeImage = document.createElement('img');
        templeImage.src = temple.imageUrl;
        templeImage.alt = `${temple.templeName} temple image`;
        templeImage.loading = 'lazy';
        card.appendChild(templeImage);

    
        templesContainer.appendChild(card);
    });
}


createTempleCards(temples);


function showOldTemples() {
    const oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(', ')[0]) < 1900);
    createTempleCards(oldTemples);
}

function showNewTemples() {
    const newTemples = temples.filter(temple => parseInt(temple.dedicated.split(', ')[0]) > 2000);
    createTempleCards(newTemples);
}

function showLargeTemples() {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCards(largeTemples);
}

function showSmallTemples() {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCards(smallTemples);
}


document.querySelector('nav ul').addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName === 'A') {
        event.preventDefault();
        switch (target.textContent) {
            case 'Home':
                createTempleCards(temples);
                break;
            case 'Old':
                showOldTemples();
                break;
            case 'New':
                showNewTemples();
                break;
            case 'Large':
                showLargeTemples();
                break;
            case 'Small':
                showSmallTemples();
                break;
        }
    }
});

