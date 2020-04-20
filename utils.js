import findById from './find-by-id.js';
import products from './data/products.js';

export function recordViews(array, sessionData) {
    array.forEach(productId => {
        // search if product is already in session data
        let currentProduct = findById(sessionData, productId);
        
        // if not, create the new object
        if (!currentProduct) {
            const origProduct = findById(products, productId);

            const initData = {
                id: productId,
                name: origProduct.name,
                selections: 0,
                views: 1
            };
            sessionData.push(initData);
        } else {
            currentProduct.views++;
        }
    });
}