"use strict";

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let products1 = products.filter(product => {
    if ('photos' in product && product.photos.length > 0) {
        return true;
    }
    return false;
});
console.log(products1);



let products2 = products.sort(function (a, b) {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    return 0;
});
console.log(products2);