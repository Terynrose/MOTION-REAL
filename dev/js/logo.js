import {gsap} from "gsap";
// import{DrawSVGPlugin} from "gsap/DrawSVGPlugin";

// gsap.registerPlugin(DrawSVGPlugin);


const logoTL = gsap.timeline();
logoTL.from("#Body", {duration: 1, alpha: 0}, "second")
        .from("#LW", {duration: 1, alpha: 0, rotation: 83, transformOrigin: "right"}, "third")
        .from("#RW", {duration: 1, alpha: 0, rotation: -83, transformOrigin: "left"}, "third")
        .from("#Beak", {duration: 1, alpha: 0}, "after-third")
        .from("#Shadows", {duration: 1, alpha: 0}, "after-third")
        .from("#Feathers", {delay: 1.5, duration: 1, alpha: 0}, "third")
        .to("#logo", {duration: 1, y: 210, scale: 1.25}, "fourth")
        .to("#LW", {duration: 1, alpha: 0}, "fourth")
        .to("#RW", {duration: 1, alpha: 0}, "fourth")
        .to("#Beak", {duration: 1, alpha: 0}, "fourth")
        .to("#Shadows", {duration: 1, alpha: 0}, "fourth")
        .to("#Feathers", {duration: 1, alpha: 0}, "fourth")
        .from("#Wings", {duration: 1, alpha: 0}, "fourth")
        .from("#dashboard", {duration: 1, alpha: 0}, "fifth");






export function logoAnimation() {
    return logoTL;
}
