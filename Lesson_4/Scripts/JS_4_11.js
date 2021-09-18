'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - this.price * .25;
}

let a = new Product('Авокадо', 125);
a.make25PercentDiscount();
console.log(a);

class Product1{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - this.price * .25;
    }
}

let b = new Product1('Апельсины', 267);
b.make25PercentDiscount();
console.log(b);