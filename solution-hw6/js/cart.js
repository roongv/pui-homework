// Roll Class------------------------------------------------------//

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;

        this.element = null;
    }
}


//---------------Create an empty cart array---------------//
let cart = new Set();

//---------Retrieve cart from local storage upon page load-------//
function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedItems');
    const cartArray = JSON.parse(cartArrayString);
    const cartSet = new Set(cartArray);
    cart = cartSet;
    console.log(cart);
}

retrieveFromLocalStorage();


// Display Roll objects (with template element)--------------------//

function createElement(cartItem) {
    let template = document.querySelector('#cartItemTemplate');
    let clone = template.content.cloneNode(true);
    cartItem.element = clone.querySelector('.cartItem');

    const cartItemElement = document.querySelector('.cartItem-list');

    cartItemElement.append(cartItem.element);

    updateElement(cartItem);

    // Remove items from cart
    let removeButton = cartItem.element.querySelector('.removeItem');
    removeButton.addEventListener('click', () => {
        removeItem(cartItem);
        computeFinal();
        saveToLocalStorage();
    });
}


// Create dictionaries for glazing and pack size options----------//

const glazingOptions = {
    "Keep original": 0,
    "Sugar milk": 0,
    "Vanilla milk": 0.5,
    "Double chocolate": 1.5,
};

const packSizeOptions = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10,
};


// Function for individual price computation----------------------//

function computePrice(cartItem) {
    individualPrice = (cartItem.basePrice + glazingOptions[cartItem.glazing]) * packSizeOptions[cartItem.size];
    return individualPrice.toFixed(2);
}


// Update the content inside the template-------------------------//

function updateElement(cartItem) {
    let rollImage = rolls[cartItem.type].imageFile;

    let itemImageElement = cartItem.element.querySelector('.finalItemImage');
	let itemTypeElement = cartItem.element.querySelector('.item-type span');
	let itemGlazingElement = cartItem.element.querySelector('.item-glazing span');
    let itemPackElement = cartItem.element.querySelector('.item-pack-size span');
    let itemPriceElement = cartItem.element.querySelector('.cartTotalPrice');

    itemImageElement.src = './images/' + rollImage;
    itemTypeElement.innerText = cartItem.type + ' cinnamon roll';
    itemGlazingElement.innerText = 'Glazing: ' + cartItem.glazing;
    itemPackElement.innerText = 'Pack Size: ' + cartItem.size;
    itemPriceElement.innerText = '$' + computePrice(cartItem);
}


// Iterate through 4 Roll objects to update element---------------//

for (let item of cart) {
    createElement(item);
    computeFinal();
}


// Remove items from cart-----------------------------------------//

function removeItem(cartItem) {
    cartItem.element.remove();
    cart.delete(cartItem);
}


//-----------Convert cart to JSON and save to local----------//
function saveToLocalStorage() {
    const cartArray = Array.from(cart);
    const cartArrayString = JSON.stringify(cartArray);
    localStorage.setItem('storedItems', cartArrayString);
    console.log(cart);
}



// Compute total price--------------------------------------------//

function computeFinal() {
    let finalPrice = 0;

    if (cart.size != 0) {
        for (let item of cart) {
            let itemPriceToCompute = computePrice(item)
            finalPrice = finalPrice + parseFloat(itemPriceToCompute);
        }
    }
    
    let finalPriceToDisplay = document.querySelector('#final-price');
    finalPriceToDisplay.innerText = '$' + finalPrice.toFixed(2);
}



