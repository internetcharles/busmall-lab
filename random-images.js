function generateRandom(products) {
    const indexNumber = Math.floor(Math.random() * 20);
    const randomObject = products[indexNumber];
    const productId = randomObject.id;

    return productId;
}

export function generateThreeRandom(products) {
    // create empty array
    const threeIds = [];

    while (threeIds.length < 3) {
        const randomProduct = generateRandom(products);
        threeIds.push(randomProduct)
        
        // check for duplicates


    }

    return threeIds;
}
