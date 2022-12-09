//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Create the main produce list ----------------------------//

// Create a class for Produce -----------------------------------//

class Produce {
    constructor(type) {
        this.type = type;
        this.element = null;
    }
}


// Function to add items to the produce set -----------------------------------//

const fallSet = new Set();


function addNewProduce(type) {
    let produceItem = new Produce(type);
    fallSet.add(produceItem);
    return produceItem;
}

addNewProduce("Acorn Squash");
addNewProduce("Apples");
addNewProduce("Beets");
addNewProduce("Butternut Squash");
addNewProduce("Cantaloupe");
addNewProduce("Cauliflower");
addNewProduce("Eggplant");
addNewProduce("Figs");
addNewProduce("Grapes");
addNewProduce("Green Beans");
addNewProduce("Lettuce");
addNewProduce("Mangoes");
addNewProduce("Mushrooms");
addNewProduce("Okra");
addNewProduce("Peppers");
addNewProduce("Persimmons");
addNewProduce("Pomegranates");
addNewProduce("Pumpkins");
addNewProduce("Spinach");
addNewProduce("Sweet Potatoes");
addNewProduce("Swiss Chards");
addNewProduce("Tomatoes");



// Function to add items to the Produce list -----------------------------------//

function createElement(produceItem) {
    let template = document.querySelector('#produce-list-template');
    let clone = template.content.cloneNode(true);
    produceItem.element = clone.querySelector('.produce-list');

    const productItemElement = document.querySelector('.produce-list-element');
    productItemElement.append(produceItem.element);

    updateElement(produceItem);

    let favoriteItem = produceItem.element.querySelector('.produce-item');
    
    favoriteItem.addEventListener('click', () => {
        starOnOff(produceItem);
        createStarredElement(produceItem);
    });
}


function updateElement(produceItem) {
    let itemTypeElement = produceItem.element.querySelector('.underline-on-hover');
    itemTypeElement.innerText = produceItem.type;
}

for (let item of fallSet) {
    createElement(item);
}


// Function to turn the stars into yellow -----------------------------------//

function starOnOff(produceItem) {
    let star = produceItem.element.querySelector('.favorite-star');
    star.src = './asset/Star-Filled.png'; 
   
}


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Create favorite lists -----------------------------------//


// Function to add items to the Produce list -----------------------------------//

function createStarredElement(produceItem) {
    let template = document.querySelector('#favorite-list-template');
    let clone = template.content.cloneNode(true);
    produceItem.element = clone.querySelector('.favorite-card');

    const starredItemElement = document.querySelector('.fall-flexbox-element');
    starredItemElement.append(produceItem.element);

    updateStarredElement(produceItem);

    let removeButton = produceItem.element.querySelector('.cross');
    removeButton.addEventListener('click', () => {
        removeItem(produceItem);
    })
}

// Function to turn the stars into yellow -----------------------------------//

function updateStarredElement(produceItem) {
    let itemTypeElement = produceItem.element.querySelector('.starred-item-to-display');
    itemTypeElement.innerText = produceItem.type;
}


// Function to remove items to the Produce list -----------------------------------//

function removeItem(produceItem) {
    produceItem.element.remove();
}



//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Vertical Nav Bar, taken from https://codepen.io/dcode-software/pen/PombjJy -----------------------------------//

function activateNavigation() {
    const sections = document.querySelectorAll(".section");
    const navContainer = document.createElement("nav");
    const navItems = Array.from(sections).map((section) => {
      return `
                      <div class="nav-item" data-for-section="${section.id}">
                          <a href="#${section.id}" class="nav-link"></a>
                          <span class="nav-label">${section.dataset.label}</span>
                      </div>
                  `;
    });

    console.log(navItems);
  
    navContainer.classList.add("nav");
    navContainer.innerHTML = navItems.join("");
  
    const observer = new IntersectionObserver(
      (entries) => {
        document.querySelectorAll(".nav-link").forEach((navLink) => {
          navLink.classList.remove("nav-link-selected");
        });
  
        const visibleSection = entries.filter((entry) => entry.isIntersecting)[0];
  
        document
          .querySelector(
            `.nav-item[data-for-section="${visibleSection.target.id}"] .nav-link`
          )
          .classList.add("nav-link-selected");
      },
      { threshold: 0.5 }
    );
  
    sections.forEach((section) => observer.observe(section));
  
    document.body.appendChild(navContainer);
  }
  
  activateNavigation();
  










