import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const revealTL = gsap.timeline();

export function revealAnimation(){
    revealTL.fromTo("#circle", {duration: 2, drawSVG: "0% 10%"},{duration: 2, drawSVG: "90% 100%"})
                .to("#circle", {duration: 2, drawSVG: "100%"});

    return revealTL
}