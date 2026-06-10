
// HERO SLIDER

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

if(slides.length > 0){

setInterval(() => {

slides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

slides[currentSlide].classList.add("active");

},4000);

}

// SEARCH

const searchInput = document.querySelector(".search-box input");

const products = document.querySelectorAll(".product-card");

if(searchInput){

searchInput.addEventListener("keyup", () => {

let value = searchInput.value.toLowerCase();

products.forEach(product => {

let title = product.querySelector("h3").innerText.toLowerCase();

if(title.includes(value)){
product.style.display = "block";
}else{
product.style.display = "none";
}

});

});

}

// CART

let cart = [];

const cartCount = document.querySelector(".cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

const cartDrawer = document.querySelector(".cart-drawer");
const cartOverlay = document.querySelector(".cart-overlay");
const cartIcon = document.querySelector(".cart-icon");
const closeCart = document.querySelector(".close-cart");

const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(button => {

button.addEventListener("click", () => {

const card = button.parentElement;

const name = card.querySelector("h3").innerText;

const price = parseInt(
card.querySelector("p").innerText.replace("Rs.","")
);
cart.push({
name:name,
price:price
});

updateCart();

cartDrawer.classList.add("active");
cartOverlay.classList.add("active");

});

});

function updateCart(){

cartCount.innerText = cart.length;

cartItems.innerHTML = "";

let total = 0;

if(cart.length === 0){

cartItems.innerHTML = "<p>Your cart is empty.</p>";

}

cart.forEach(item => {

total += item.price;


cartItems.innerHTML += `
<div style="padding:10px 0;border-bottom:1px solid #eee;">
<strong>${item.name}</strong>
<br>
Rs.${item.price}
</div>
`;

});

cartTotal.innerText = total;

}

// OPEN CART

if(cartIcon){

cartIcon.addEventListener("click", () => {

cartDrawer.classList.add("active");
cartOverlay.classList.add("active");

});

}

if(closeCart){

closeCart.addEventListener("click", () => {

cartDrawer.classList.remove("active");
cartOverlay.classList.remove("active");

});

}

if(cartOverlay){

cartOverlay.addEventListener("click", () => {

cartDrawer.classList.remove("active");
cartOverlay.classList.remove("active");

});

}

// CHECKOUT

const checkoutBtn = document.getElementById("checkout-btn");

const checkoutModal = document.querySelector(".checkout-modal");

if(checkoutBtn){

checkoutBtn.addEventListener("click", () => {

checkoutModal.style.display = "flex";

});

}

// PLACE ORDER

const placeOrder = document.getElementById("place-order");

if(placeOrder){

placeOrder.addEventListener("click", () => {

const name = document.getElementById("customer-name").value;
const phone = document.getElementById("customer-phone").value;
const city = document.getElementById("customer-city").value;
const address = document.getElementById("customer-address").value;

let orderText =
"NEW ORDER%0A%0A";

cart.forEach(item => {

orderText += item.name + " - Rs." + item.price + "%0A";

});

orderText +=
"%0AName: " + name +
"%0APhone: " + phone +
"%0ACity: " + city +
"%0AAddress: " + address +
"%0A%0ATotal: Rs." + cartTotal.innerText;

```javascript
window.open(
"https://wa.me/923257059472?text=" + orderText,
"_blank"
);

});

}
