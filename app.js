import products from './data/products.js';
import findById from './find-by-id.js';
import { generateThreeRandom } from './random-images.js';
import { createAllProducts } from './create-products.js';

const selectionContainer = document.getElementById('selection-container');
const submitButton = document.getElementById('submit-button');

const randomProducts = generateThreeRandom(products);
createAllProducts(randomProducts, selectionContainer);

let choiceCounter = 0;

submitButton.addEventListener('click', () => {
    if (choiceCounter > 25) {
        submitButton.disabled = true;
    }

    // replacement of inputs

    while (selectionContainer.firstChild) {
        selectionContainer.removeChild(selectionContainer.firstChild);
    }

    const randomProducts = generateThreeRandom(products);
    createAllProducts(randomProducts, selectionContainer);

    choiceCounter++;
} )