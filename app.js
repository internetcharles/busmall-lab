import products from './data/products.js';
import findById from './find-by-id.js';
import { generateThreeRandom } from './random-images.js';
import { createAllProducts } from './create-products.js';

const selectionContainer = document.getElementById('selection-container');

const randomProducts = generateThreeRandom(products);
createAllProducts(randomProducts, selectionContainer);