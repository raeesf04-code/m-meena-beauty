const images = [
"hero4.jpg",
"hero5.jpg",
"hero6.jpg",
"hero7.jpg",
"hero8.jpg"
];

let current = 0;

setInterval(() => {

current++;

if(current >= images.length){
current = 0;
}

document.getElementById("slider").src = images[current];

}, 2500);
