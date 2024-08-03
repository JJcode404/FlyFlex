const stocks = [];
const cart = [];

function Product(name, price, color, size, quantity, frontImage, backImage) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.size = size;
    this.quantity = quantity;
    this.frontImage = frontImage;
    this.backImage = backImage;
}

Product.prototype.changePrice = function(newPrice) {
    this.price = newPrice;
};

function addProductTostocks(name, price, color, size, quantity, frontImage, backImage) {
    const newProduct = new Product(name, price, color, size, quantity, frontImage, backImage);
    stocks.push(newProduct);
    return newProduct;
}

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const description = item.querySelector('.description');
            description.textContent = 'View Product';
        });

        item.addEventListener('mouseleave', function() {
            const description = item.querySelector('.description');
            description.textContent = description.getAttribute('data-original-text');
        });
    });
});

export{
    addProductTostocks,
    stocks, 
    cart
}