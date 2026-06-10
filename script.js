const images = [
"hero1.webp",
"hero2.jpg",
"hero3.webp"
];

let current = 0;

setInterval(() => {

current++;

if(current >= images.length){
current = 0;
}

document.getElementById("slider").src =
images[current];

},3000);
