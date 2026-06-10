```javascript id="8o8t4m"
// HERO SLIDER

let slides = document.querySelectorAll('.slide');

let current = 0;

setInterval(() => {

slides[current].classList.remove('active');

current++;

if(current >= slides.length){
current = 0;
}

slides[current].classList.add('active');

}, 4000);


// CART COUNTER

let cartCount = 0;

const cartDisplay = document.querySelector('.cart-count');

const cartButtons = document.querySelectorAll('.product-card button');

cartButtons.forEach(button => {

button.addEventListener('click', () => {

cartCount++;

cartDisplay.innerText = cartCount;

button.innerText = "Added ✓";

setTimeout(() => {
button.innerText = "Add To Cart";
}, 1000);

});

});


// SEARCH FILTER

const searchInput = document.querySelector('.search-box input');

const products = document.querySelectorAll('.product-card');

searchInput.addEventListener('keyup', () => {

let value = searchInput.value.toLowerCase();

products.forEach(product => {

let title = product.querySelector('h3').innerText.toLowerCase();

if(title.includes(value)){
product.style.display = "block";
}else{
product.style.display = "none";
}

});

});
```
