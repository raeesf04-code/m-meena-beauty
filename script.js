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

}, 3000);


// CART SYSTEM

let cartCount = 0;

const cartIcon = document.querySelector('.cart-count');

const buttons = document.querySelectorAll('.product-card button');

buttons.forEach(button => {

button.addEventListener('click', () => {

cartCount++;

if(cartIcon){
cartIcon.innerText = cartCount;
}



});

});
