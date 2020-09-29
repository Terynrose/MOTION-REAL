import {gsap} from "gsap";

console.log(gsap);

gsap.to(".red-box",{duration: 2, alpha:0.5, rotation: 360, x: 500, y: 200, borderRadius:"50px"});
gsap.to(".red-box", {duration:1, delay:2, x: 700, borderRadius: "200px"});
gsap.to(".red-box", {duration:1, delay:3, x: 350, y: 100, scale:2})
gsap.to(".red-box", {
    duration:3, 
    delay:3.8, 
    x:-34.5,
    y:35,
    backgroundColor: "blue", 
    position: "absolute", 
    content: "", 
    left: "50px", 
    top: "0", 
    width: "50px", 
    height: "80px", 
    borderRadius: "50px 50px 0 0", 
    transform: "rotate(45deg)", 
    transformOrigin: "100% 100%"
})

gsap.to(".blue-box",{duration:2, alpha: 0.5, rotation: 360, x:500, borderRadius: "50px"});
gsap.to(".blue-box", {duration:1, x: 500, y:-100, rotation: 360, borderRadius: "200px", delay: 2});
gsap.to(".blue-box", {duration:1, delay:3, y: -600, scale:0.1})
gsap.to(".blue-box", {
    duration:3, 
    delay:3.8, 
    backgroundColor: "red", 
    alpha: 0.5,
    position: "absolute", 
    content: "", 
    left: "50px", 
    top: "0", 
    width: "50px", 
    height: "80px", 
    borderRadius: "50px 50px 0 0", 
    transform: "rotate(-45deg)", 
    transformOrigin: "100% 100%"
})
