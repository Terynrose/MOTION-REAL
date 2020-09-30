import {gsap} from "gsap";

console.log(gsap);

var boxSpeed = 1;

var boxAnimationTL = gsap.timeline();

boxAnimationTL.to(".red-box", {duration: 2, x:500, y:200, rotation: 360, borderRadius:"50px", alpha: 0.5}, "first")
                .to(".red-box", {duration: boxSpeed, x:700, borderRadius:"200px"}, "second")
                .to(".red-box", {duration: boxSpeed, x:350, y:100, scale:2, alpha: 1}, "third")
                .to(".red-box", {duration: 2, backgroundColor: "blue", alpha:0.5, x:-34.5, y:35, position:"absolute", content: "", left:"50px", top:"0", width:"50px", height:"80px", borderRadius:"50px 50px 0 0", transform:"rotate(45deg)", transformOrigin:"100% 100%"}, "fourth")
                .to(".blue-box", {duration: 2, x:500, rotation:360, borderRadius:"50px", alpha: 0.5}, "first")
                .to(".blue-box", {duration: boxSpeed, x:500, y:-100, rotation:360, borderRadius:"200px"}, "second")
                .to(".blue-box", {duration: boxSpeed, y:-600, scale:0.1, alpha:1}, "third")
                .to(".blue-box", {duration: 2, backgroundColor: "red", alpha:0.5, position:"absolute", content: "", left:"50px", top:"0", width:"50px", height:"80px", borderRadius:"50px 50px 0 0", transform:"rotate(-45deg)", transformOrigin:"100% 100%"}, "fourth");

