//---------------Setting up URL parameter---------------//

let queryString = window.location.search;
let params = new URLSearchParams(queryString);


//---------------Assign name, image, and price---------------//

let rollType = params.get('roll');
let rollPrice = rolls[rollType].basePrice;
let rollImage = rolls[rollType].imageFile;


//-----------Update page with URL parameter----------//

let headerElement = document.querySelector('#header-element');
headerElement.innerText = rollType + ' cinnamon roll';

let imageElement = document.querySelector('.mainImage');
imageElement.src = './images/' + rollImage;


//-----------Storing current product info----------//

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}


//---------------Create an empty cart array---------------//
let cart = [];


//-----------Storing objects in cart array----------//

let addRolls = document.querySelector('#addToCartButton');
addRolls.addEventListener('click', printToConsole);



function addToArray() {
    const userSelection = new Roll(rollType, glazingForCompute.name, packForCompute.name, rollPrice);
    cart.push(userSelection);

}

function printToConsole() {
    addToArray();
    saveToLocalStorage();
    console.log(cart);
}


//-----------Display price as default----------//

computePrice();
displayPrice();




//----------------------------------HW6-------------------------------------//
//--------------------------------------------------------------------------//
//--------------------------------------------------------------------------//
//--------------------------------------------------------------------------//
//--------------------------------------------------------------------------//
//--------------------------------------------------------------------------//

//-----------Convert cart to JSON and save to local----------//

function saveToLocalStorage() {
    const cartArrayString = JSON.stringify(cart);
    localStorage.setItem('storedItems', cartArrayString);
}


//---------Retrieve cart from local storage upon page load-------//
function retrieveFromLocalStorage() {
        const cartArrayString = localStorage.getItem('storedItems');
        const cartArray = JSON.parse(cartArrayString);

        if (cartArray == null) {
            console.log(cart);
        }
        else {
            cart = cartArray; 
            console.log(cart);
        }
}

retrieveFromLocalStorage();



