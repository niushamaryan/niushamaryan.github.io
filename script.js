const items = document.querySelectorAll(".card, .project");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

},{
threshold:0.15
});

items.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(60px)";
item.style.transition="all .8s ease";

observer.observe(item);

});
const words = [
"AI Developer",
"Web Designer",
"Prompt Engineer",
"Automation Builder"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

const current = words[wordIndex];

if(!isDeleting){
typing.textContent = current.substring(0,charIndex++);
}else{
typing.textContent = current.substring(0,charIndex--);
}

let speed = 120;

if(!isDeleting && charIndex === current.length+1){
speed = 1500;
isDeleting = true;
}

if(isDeleting && charIndex===0){
isDeleting=false;
wordIndex=(wordIndex+1)%words.length;
}

setTimeout(typeEffect,speed);

}

typeEffect();
