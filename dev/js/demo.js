import {
    gsap
} from "gsap";

const lampTL = gsap.timeline();
lampTL.from("#WL", {
    duration: 0.5,
    y: -300
});

export function lampAnimation() {
    return lampTL;
}