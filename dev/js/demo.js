import {
    gsap
} from "gsap";

const lampTL = gsap.timeline();
lampTL.to("#Shine", {duration: 0.05, alpha: 0})
    .from("#Lamp-White", {duration: 0.5, y: -300})
    .to("#Switch", {duration: 0.25, scaleY: 1.5})
    .to("#Switch", {duration: 0.25, scaleY: 1})
    .to("#white", {duration: 0.5, backgroundColor: "$white"});


export function lampAnimation() {
    return lampTL;
}