import {
    gsap
} from "gsap";

//const lampTL = gsap.timeline();
//lampTL.to("#Shine", {duration: 0.05, alpha: 0}, "first")
//    .to("#Text", {duration: 0.05, alpha: 0.1}, "first")
//    .from("#Lamp-White", {duration: 0.5, y: -300})
//    .to("#Switch", {duration: 0.5, delay: 0.25, scaleY: 1.6})
//    .to("#Switch", {duration: 0.25, scaleY: 1})
//    .to("#white", {duration: 0.5, backgroundColor: "white"}, "change")
//    .to("#Body", {duration: 0.5, stroke: "black"}, "change")
//    .to("#Switch", {duration: 0.5, alpha: 0}, "change")
//    .to("#Shine", {duration: 0.5, alpha: 1}, "change")
//    .to("#Text", {duration: 0.5, alpha: 1}, "change");

const logoTL = gsap.timeline();
logoTL.from("#Body", {duration: 1, alpha: 0}, "second")
        .from("#LW", {duration: 3, alpha: 0, rotation: 83, transformOrigin: "right", ease: "bounce"}, "third")
        .from("#RW", {duration: 3, alpha: 0, rotation: -83, transformOrigin: "left", ease: "bounce"}, "third")
        .from("#Beak", {delay: 1.5, duration: 1, alpha: 0}, "third")
        .from("#Shadows", {delay: 1, duration: 1, alpha: 0}, "third")
        .from("#Feathers", {delay: 1.5, duration: 1, alpha: 0}, "third")
        .to("#logo", {duration: 1, y: 210, scale: 1.25}, "fourth")
        .to("#LW", {duration: 1, alpha: 0}, "fourth")
        .to("#RW", {duration: 1, alpha: 0}, "fourth")
        .to("#Beak", {duration: 1, alpha: 0}, "fourth")
        .to("#Shadows", {duration: 1, alpha: 0}, "fourth")
        .to("#Feathers", {duration: 1, alpha: 0}, "fourth")
        .from("#Wings", {duration: 1, alpha: 0}, "fourth")
        .from("#Dashboard", {duration: 1, alpha: 0}, "fifth");




//        .to("LW", {duration: 1, rotation: -90, ease: "elastic"})
//        .to("#LW", {duration: 0, alpha: 0, rotation: 90}, "first")
//        .from("#LW", {duration: 1, height: 0, alpha: 0})
//        .to("#LW", {duration: 1, alpha: 1, height: 200});


export function logoAnimation() {
    return logoTL;
}


//export function lampAnimation() {
//    return lampTL;
//}