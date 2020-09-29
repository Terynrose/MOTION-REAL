import {gsap} from "gsap";

console.log(gsap);

var boxSpeed = 1;

gsap.to(".red-box",{
    duration: boxSpeed,
    x: 400
})
gsap.to(".blue-box",{duration:boxSpeed,x:400})

gsap.to(".orange-box",{
    duration: boxSpeed,
    x: 400
})