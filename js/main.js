function domID(id){
    return document.getElementById(id);
}

let stars = domID("stars");
let moon = domID("moon");
let mountains_behind = domID("mountains_behind");
let mountains_front = domID("mountains_front");
let witch = domID("witch");
let text = domID("text");
let btn = document.querySelector(".btn");
let header = document.querySelector("header");

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    stars.style.left = value*0.25 + "px";
    moon.style.top = value*1.05 + "px";
    mountains_behind.style.top = value*0.5 + "px";
    mountains_front.style.top = value*0 + "px";
    witch.style.right = value*4.5 + "px";
    text.style.marginRight = value*4 + "px";
    text.style.marginTop = value*1.5 + "px";
    btn.style.marginTop = value*1.5 + "px";
    header.style.top = value*0.5 + "px";
})