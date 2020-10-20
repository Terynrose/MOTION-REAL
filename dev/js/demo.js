import {
    gsap
} from "gsap";

const lampTL = gsap.timeline();
lampTL.to("#Shine", {duration: 0.05, alpha: 0}, "first")
    .to("#Text", {duration: 0.05, alpha: 0.1}, "first")
    .from("#Lamp-White", {duration: 0.5, y: -300})
    .to("#Switch", {duration: 0.5, delay: 0.25, scaleY: 1.6})
    .to("#Switch", {duration: 0.25, scaleY: 1})
    .to("#white", {duration: 0.5, backgroundColor: "white"}, "change")
    .to("#Body", {duration: 0.5, stroke: "black"}, "change")
    .to("#Switch", {duration: 0.5, alpha: 0}, "change")
    .to("#Shine", {duration: 0.5, alpha: 1}, "change")
    .to("#Text", {duration: 0.5, alpha: 1}, "change");

    


export function lampAnimation() {
    return lampTL;
}