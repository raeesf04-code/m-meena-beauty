// HERO SLIDER
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

if (slides.length > 0) {
setInterval(() => {
slides[currentSlide].classList.remove("active");
currentSlide = (currentSlide + 1) % slides.length;
slides[currentSlide].classList.add("active");
}, 4000);
}

// SEARCH
const searchInput = document.querySelector(".search-box input");
const products = document.querySelectorAll(".product-card");

if (searchInput) {
searchInput.addEventListener("keyup", () => {
let value = searchInput.value.toLowerCase();

products.forEach(product => {
  let title = product.querySelector("h3").innerText.toLowerCase();

  if (title.includes(value)) {
    product.style.display = "block";
  } else {
    product.style.display = "none";
  }
});

});
}

// CART
const cart = [];

function updateCart() {

const cartCount = document.querySelector(".cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

cartCount.innerText = cart.length;

cartItems.innerHTML = "";

let total = 0;

if(cart.length === 0){
cartItems.innerHTML = "Your cart is empty.";
}

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `

});

cartTotal.innerText = total;
}

function removeItem(index){
cart.splice(index,1);
updateCart();
}

document.querySelectorAll(".product-card button").forEach(button=>{

button.addEventListener("click",()=>{

const card = button.parentElement;

const name = card.querySelector("h3").innerText;

const price = parseInt(card.querySelector(".price").innerText);

cart.push({
name,
price
});

updateCart();

document.querySelector(".cart-drawer").classList.add("active");
document.querySelector(".cart-overlay").classList.add("active");

});

});

document.querySelector(".cart-icon").addEventListener("click",()=>{

document.querySelector(".cart-drawer").classList.add("active");
document.querySelector(".cart-overlay").classList.add("active");

});

document.querySelector(".close-cart").addEventListener("click",()=>{

document.querySelector(".cart-drawer").classList.remove("active");
document.querySelector(".cart-overlay").classList.remove("active");

});

document.querySelector(".cart-overlay").addEventListener("click",()=>{

document.querySelector(".cart-drawer").classList.remove("active");
document.querySelector(".cart-overlay").classList.remove("active");

});

const checkoutBtn = document.getElementById("checkout-btn");
const checkoutModal = document.querySelector(".checkout-modal");

checkoutBtn.addEventListener("click",()=>{

checkoutModal.style.display = "flex";

});

checkoutModal.addEventListener("click",(e)=>{

if(e.target === checkoutModal){
checkoutModal.style.display = "none";
}

});
// PLACE ORDER
const placeOrder = document.getElementById("place-order");

if (placeOrder) {
placeOrder.addEventListener("click", () => {

const name = document.getElementById("customer-name").value;
const phone = document.getElementById("customer-phone").value;
const city = document.getElementById("customer-city").value;
const address = document.getElementById("customer-address").value;

let orderText = "NEW ORDER%0A%0A";

cart.forEach(item => {
  orderText += item.name + " - Rs." + item.price + "%0A";
});

orderText +=
  "%0AName: " + name +
  "%0APhone: " + phone +
  "%0ACity: " + city +
  "%0AAddress: " + address +
  "%0A%0ATotal: Rs." + cartTotal.innerText;

window.open(
  "https://wa.me/923257059472?text=" + orderText,
  "_blank"
);

});

if(checkoutModal){

checkoutModal.addEventListener("click", (e) => {

if(e.target === checkoutModal){
checkoutModal.style.display = "none";
}

});

}
