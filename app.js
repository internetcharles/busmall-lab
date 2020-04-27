import products from './data/products.js';
import findById from './find-by-id.js';
import { generateThreeRandom } from './random-images.js';
import { createAllProducts } from './create-products.js';
import { recordViews } from './utils.js';

const selectionContainer = document.getElementById('selection-container');
const submitButton = document.getElementById('submit-button');

const randomProducts = generateThreeRandom(products);
createAllProducts(randomProducts, selectionContainer);

let choiceCounter = 0;
const sessionData = [];
recordViews(randomProducts, sessionData);

submitButton.addEventListener('click', () => {
    if (choiceCounter > 25) {
        submitButton.disabled = true;

        // push session data to local storage
        let stringySessionData = JSON.stringify(sessionData);
        localStorage.setItem('results', stringySessionData);
        window.location.replace('./results/index.html');
    }


    // finding out which button is pressed and log it to sessionData
    const selectedInput = document.querySelector('input[type=radio]:checked');
    if (selectedInput === null) { alert('Make your choice!')};
    const selectedProductID = selectedInput.value;
    const selectedProductData = findById(sessionData, selectedProductID);
    selectedProductData.selections+++

    choiceCounter++;


    // replacement of inputs

    while (selectionContainer.firstChild) {
        selectionContainer.removeChild(selectionContainer.firstChild);
    }

    const randomProducts = generateThreeRandom(products);
    createAllProducts(randomProducts, selectionContainer);

    recordViews(randomProducts, sessionData);


});