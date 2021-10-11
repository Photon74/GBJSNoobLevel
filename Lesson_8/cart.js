'use strict';

const cart = document.querySelector('.cart');
const cartIcon = document.querySelector('.cartIconWrap');
cartIcon.addEventListener('click', () => {
    cart.classList.toggle('hidden');
    //cart.classList.toggle('animated');
});

const cartRows = {};
const itemsEl = document.querySelector('.featuredItems');
const cartHeader = document.querySelector('.cartHeader');
const cartCounter = document.querySelector('.cartCounter');
const cartTotalValue = document.querySelector('.cartTotalValue');

itemsEl.addEventListener('click', clickHandler);

function clickHandler(event) {
    if (!event.target.classList.contains('toCart')) return;
    document.querySelectorAll('.feturedRow').forEach(row => row.remove());
    let productDataset = event.target.closest('.featuredItem').dataset;
    let product = {
            id: productDataset.id,
            name: productDataset.name,
            price: productDataset.price,
    }
    addToCart(product);
}


function addToCart(product) {
    saveProduct(product);
    cartHeader.insertAdjacentHTML('afterend', getCartRowsMarkup(cartRows));
}

function saveProduct(product) {
    if (cartRows.hasOwnProperty(product.id)) {
        cartRows[product.id].counter++;
        cartRows[product.id].total = cartRows[product.id].price * cartRows[product.id].counter;
    } else {
        cartRows[product.id] = {
            id: product.id,
            name: product.name,
            price: +product.price,
            counter: 1,
            total: +product.price,
        }
    }
}

function getCartRowsMarkup(cartRows) {
    let result = '';
    let totalCounter = 0;
    let totalValue = 0;
    for (let key in cartRows) {
        result += `<div class="cartRow feturedRow" data-id="${cartRows[key].id}">
                    <div>${cartRows[key].name}</div>
                    <div>${cartRows[key].counter} шт.</div>
                    <div>$${(cartRows[key].price).toFixed(2)}</div>
                    <div>$${(cartRows[key].total).toFixed(2)}</div>
                </div>`
        totalCounter += cartRows[key].counter;
        totalValue += cartRows[key].total;
    }
    cartCounter.innerHTML = totalCounter;
    cartTotalValue.innerHTML = totalValue.toFixed(2);
    return result;
}