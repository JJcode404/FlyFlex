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
                <li><a href="../shop/catalog.html">Catalog</a></li>
                <li><a href="contact/contact.html">Contact</a></li>
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
