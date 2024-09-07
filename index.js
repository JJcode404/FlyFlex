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

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function() {
        const productDetail = document.getElementById('product-detail');
        const itemName = this.getAttribute('productName');
        const itemImage = this.getAttribute('productImage');
        const itemColor = this.getAttribute('productColor');
        const itemPrice = this.getAttribute('productPrice');
        
        productDetail.querySelector('#product-detail-image').src = itemImage;
        productDetail.querySelector('#product-detail-name').textContent = itemName;
        productDetail.querySelector('#product-detail-price').textContent = `Price: ${itemPrice}`;
        productDetail.querySelector('#product-detail-color').textContent = `Color: ${itemColor}`;
        // productDetail.querySelector('#product-detail-size').textContent = `Size: ${product.size}`;
        // productDetail.querySelector('#product-detail-quantity').textContent = `Quantity: ${product.quantity}`;
    
        const addToCartButton = productDetail.querySelector('#add-to-cart-button');
        addToCartButton.onclick = () => addToCart();
    
    
        const checkoutButton = productDetail.querySelector('#checkout-button');
        checkoutButton.onclick = () => checkout();
    
        productDetail.classList.add('visible');
    });
});

// Calculate and update the total price
function updateTotalPrice() {
    const prices = document.querySelectorAll('#checkout-list li');
    let totalPrice = 0;
    
    prices.forEach(item => {
        const price = parseFloat(item.innerHTML.split('$')[1]);
        totalPrice += price;
    });

    document.getElementById('total-price').innerText = `Total: $${totalPrice.toFixed(2)}`;
}

// Hide popup when clicking outside of it
window.addEventListener('click', function(event) {
    const checkoutPopup = document.getElementById('quick-checkout');
    if (event.target === checkoutPopup) {
        checkoutPopup.style.display = 'none';
    }
});
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('product-detail').classList.remove('visible');
});


function checkout() {
    const displayError = document.getElementById("popup");
    displayError.style.display = "block";
}
(function closePopup() {
    const displayError = document.getElementById("popup");
    displayError.querySelector("button").addEventListener("click", () => {
        displayError.style.display = "none";
    })
})();
function addToCart() {
    // cart.push(product);
    // console.log(cart)
    alert(`Sorry this can't work right now but we are working on it....iza jooh`);
}


export{
    addProductTostocks,
    stocks, 
    cart
}