// Create list of produce -----------------------------------//

class Produce {
    constructor(type) {
        this.type = type;
        this.element = null;
    }
}

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

function starOnOff(produceItem) {
    let star = produceItem.element.querySelector('.favorite-star');
    star.src = './asset/Star-Filled.png'; 
   
}


// function starOnOff(produceItem) {
//     let star = produceItem.element.querySelector('.favorite-star');
//     if (star == ) {
//         star.src = './asset/Star-Filled.png';
//     }
//     else {
//         star.src = '.asset/Star-Outline.png'
//     }
      
// }

function starOff(produceItem) {
    let star = produceItem.element.querySelector('.favorite-star');
    star.src = './asset/Star-Outline.png';
}


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Create favorite lists -----------------------------------//



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


function updateStarredElement(produceItem) {
    let itemTypeElement = produceItem.element.querySelector('.starred-item-to-display');
    itemTypeElement.innerText = produceItem.type;
}


function removeItem(produceItem) {
    produceItem.element.remove();
}












