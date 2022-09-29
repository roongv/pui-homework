let queryString = window.location.search;
let params = new URLSearchParams(queryString);


let rollType = params.get('roll');
let rollPrice = rolls[rollType].basePrice;
let rollImage = rolls[rollType].imageFile;


//-----------Update page with URL parameter----------//

let headerElement = document.querySelector('#header-element');
headerElement.innerText = rollType + ' cinnamon roll';

let imageElement = document.querySelector('.mainImage');
imageElement.src = './images/' + rollImage;

