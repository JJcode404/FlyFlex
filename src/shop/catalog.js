import { addProductTostocks, stocks, cart } from "../index.js";

const headerDiv = document.querySelector(".header");
const footerDiv = document.querySelector(".footer");

headerDiv.innerHTML = `<header> 
        <div class="search-container">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input class="Search" type="text" placeholder="Search...">
        <div class="cart" id="hidden"><i class="fa-solid fa-cart-shopping"></i></div>
        </div>
        <nav>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="./catalog.html">Catalog</a></li>
                <li><a href="../contact/contact.html">Contact</a></li>
            </ul>
            <a href="../cart/cart.html">
                <div class="cart"><i class="fa-solid fa-cart-shopping"></i></div>
            </a>
        </nav>
        <div class="logo">
            FlyFlex
        </div>
    </header>`;

footerDiv.innerHTML = `  <footer>
        <div class="footer-container">
            <div class="footer-section">
                <h3>Stay Connected</h3>
                <div class="social-icons">
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                </div>
            </div>
            <div class="footer-section">
                <h3>Be Our Friend</h3>
                <input type="email" placeholder="Your Email">
                <button type="submit">Subscribe Now</button>
            </div>
            <div class="footer-section">
                <h3>Need Assistance?</h3>
                <p>Call us: 07-15-34-53-35</p>
                <p><a href="https://www.flyflex.com">www.flyflex.com</a></p>
            </div>
        </div>
    </footer>`;

function displayStocks(filteredStocks = stocks) {
    const stockContainer = document.getElementById('stock-container');
    stockContainer.innerHTML = ''; // Clear previous content

    filteredStocks.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const productImage = document.createElement('img');
        productImage.src = product.frontImage;
        productImage.alt = product.name;
        productDiv.appendChild(productImage);

        const textDiv = document.createElement('div');
        textDiv.classList.add("textdiv");
        const productName = document.createElement('div');
        productName.className = 'product-name';
        productName.textContent = product.name;
        textDiv.appendChild(productName);

        const productPrice = document.createElement('div');
        productPrice.className = 'product-price';
        productPrice.textContent = `Price: ${product.price}`;
        textDiv.appendChild(productPrice);
        productDiv.appendChild(textDiv)

        stockContainer.appendChild(productDiv);
    });

    displayProductdetails();
}

function displayProductdetails() {
    const productDivs = document.querySelectorAll(".product");
    productDivs.forEach((div, index) => {
        div.addEventListener("click", () => showProductDetail(stocks[index]));
    });
}

function filterProducts() {
    const maxPrice = document.getElementById('price-filter').value;
    const color = document.getElementById('color-filter').value.toLowerCase();
    const size = document.getElementById('size-filter').value.toUpperCase();

    const filteredStocks = stocks.filter(product => {
        const priceMatch = !maxPrice || product.price <= maxPrice;
        const colorMatch = !color || product.color.toLowerCase() === color;
        const sizeMatch = !size || product.size.toUpperCase() === size;
        return priceMatch && colorMatch && sizeMatch;
    });

    displayStocks(filteredStocks);
}

function clearFilters() {
    document.getElementById('price-filter').value = '';
    document.getElementById('color-filter').value = '';
    document.getElementById('size-filter').value = '';
    displayStocks();
}

(function closePopup() {
    const displayError = document.getElementById("popup");
    displayError.querySelector("button").addEventListener("click", () => {
        displayError.style.display = "none";
    })
})();

function showProductDetail(product) {
    const productDetail = document.getElementById('product-detail');
    productDetail.querySelector('#product-detail-image').src = product.frontImage;
    productDetail.querySelector('#product-detail-name').textContent = product.name;
    productDetail.querySelector('#product-detail-price').textContent = `Price: ${product.price}`;
    productDetail.querySelector('#product-detail-color').textContent = `Color: ${product.color}`;
    // productDetail.querySelector('#product-detail-size').textContent = `Size: ${product.size}`;
    // productDetail.querySelector('#product-detail-quantity').textContent = `Quantity: ${product.quantity}`;

    const addToCartButton = productDetail.querySelector('#add-to-cart-button');
    addToCartButton.onclick = () => addToCart(product);


    const checkoutButton = productDetail.querySelector('#checkout-button');
    checkoutButton.onclick = () => checkout(product);

    productDetail.classList.add('visible');
}

function addToCart(product) {
    cart.push(product);
    console.log(cart)
    alert(`${product.name} has been added to the cart.`);
}

function checkout() {
    const displayError = document.getElementById("popup");
    displayError.style.display = "block";
}

document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('product-detail').classList.remove('visible');
});

document.getElementById('filter-button').addEventListener('click', filterProducts);
document.getElementById('clear-filter-button').addEventListener('click', clearFilters);

const erotomaniaShirt = addProductTostocks("Erotomania T-shirt", 1600, "red", "S", 2, "../images/balaenciaga.jpg", "./sfhsdfgsdgf");
const erotomaniaShirtdfsd = addProductTostocks("Erotomania T-shirt", 1300, "red", "S", 2, "../images/balaenciaga.jpg", "./sfhsdfgsdgf");
const erotomaniaShirtfdfs = addProductTostocks("Erotomania T-shirt", 1500, "red", "S", 2, "../images/balaenciaga.jpg", "./sfhsdfgsdgf");





erotomaniaShirt.changePrice(14999);
console.log(stocks);
displayStocks();
