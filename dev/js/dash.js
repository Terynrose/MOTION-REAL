import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const revealTL = gsap.timeline();

export function revealAnimation(){
    revealTL.from("#CrossR", {duration: 1, drawSVG: "0%"});


    return revealTL
}