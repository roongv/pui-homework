let glazingOptions = [
    {
        name: "Keep original",
        price: 0,
    },
    { 
        name: "Sugar milk",
        price: 0,
    },
    { 
        name: "Vanilla milk",
        price: 0.5,
    },
    { 
        name: "Double chocolate",
        price: 1.5,
    }
];

let packOptions = [
    {
        name: "1",
        multiplier: 1,
    },
    { 
        name: "3",
        multiplier: 3,
    },
    { 
        name: "6",
        multiplier: 6,
    },
    { 
        name: "12",
        multiplier: 12,
    }
];


let selectGlazing = document.querySelector("#glazingDropDownOptions");


for (let i = 0; i < glazingOptions.length; i++) {
    let option = document.createElement("option");
    option.text = glazingOptions[i].name;
    option.value = i;
    selectGlazing.add(option);
}


let selectPack = document.querySelector("#packSizeDropDownOptions");


for (let i = 0; i < packOptions.length; i++) {
    let option = document.createElement("option");
    option.text = packOptions[i].name;
    option.value = i;
    selectPack.add(option);
}



let glazingForCompute = glazingOptions[0].price;
let packForCompute = packOptions[0].multiplier;
let finalPrice;
let basePrice = 2.49;


function onSelectGlazingChange() {
    let glazingIndex = this.value;
    glazingForCompute = glazingOptions[glazingIndex].price;
    computePrice();
    displayPrice();
}

function onSelectPackChange() {
    let packIndex = this.value;
    packForCompute = packOptions[packIndex].multiplier;
    computePrice();
    displayPrice();
}

selectGlazing.addEventListener('change', onSelectGlazingChange);
selectPack.addEventListener('change', onSelectPackChange);


function computePrice() {
    finalPrice = (basePrice + glazingForCompute) * packForCompute;
}


function displayPrice() {
    let totalPrice = document.querySelector("#totalPrice");
    totalPrice.innerText = "$" + finalPrice.toFixed(2);
}