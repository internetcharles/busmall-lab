import productData from './data/products.js';
import findById from './find-by-id.js';

function createProduct(productId) {
    const product = findById(productData, productId);

    // flow here is label - radio button - img - description(maybe)

    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'product';
    input.value = productId;

    const p = document.createElement('p');
    p.textContent = product.name;

    const img = document.createElement('img');
    img.src = product.image;

    label.appendChild(p);
    label.appendChild(input);
    label.appendChild(img);

    return label;

}

export function createAllProducts(array, container) {
    array.forEach(id => {
        const inputElement = createProduct(id);
        container.appendChild(inputElement);
    });
}