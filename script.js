let cart = [];
let total = 0;
let cartCount = 0;

const buttons = document.querySelectorAll('.product-card button');
const cartItems = document.getElementById('cart-items');
const totalBox = document.getElementById('cart-total');
const countBox = document.querySelector('.cart-count');

buttons.forEach(button=>{

button.addEventListener('click',()=>{

let card = button.parentElement;

let name = card.querySelector('h3').innerText;

let price = parseInt(
card.querySelector('p').innerText.replace('Rs.','')
);

cart.push({name,price});

cartCount++;
countBox.innerText = cartCount;

total += price;
totalBox.innerText = total;

let item = document.createElement('div');

item.classList.add('cart-item');

item.innerHTML = `
<span>${name}</span>
<span>Rs.${price}</span>
`;

cartItems.appendChild(item);

});

});

document.getElementById('place-order').addEventListener('click',()=>{

let name =
document.getElementById('name').value;

let phone =
document.getElementById('phone').value;

let address =
document.getElementById('address').value;

if(!name || !phone || !address){
alert('Fill all fields');
return;
}

alert('Order Placed Successfully');

});
