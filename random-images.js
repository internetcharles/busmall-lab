function generateRandom(products) {
    const indexNumber = Math.floor(Math.random() * 20);
    const randomObject = products[indexNumber];
    const productId = productObject.id;

    return productId;
}

export function generateThreeRandom(products) {
    // create empty array
    threeIds = [];

    while (threeIds.length < 3) {
        const randomProduct = generateRandom(products);
        
        // check for duplicates

        if (!(threeIds.includes(randomProduct))) { threeIds.push(randomProduct);
    }
    return threeIds;
    }
}