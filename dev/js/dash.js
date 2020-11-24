import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const revealTL = gsap.timeline();

            // Dash & Spedometer Circle
revealTL.from("#dash", {duration:.5, alpha: 0})
            .from("#circle", {duration: .05, alpha: 0})
            .fromTo("#circle", {duration: .5, drawSVG: "0% 10%"},{duration: .5, drawSVG: "90% 100%"})
                .to("#circle", {duration: .5, drawSVG: "100%"})
            .from("#crossR", {duration: .5, drawSVG: "0%"}, "cross")
            .from("#crossL", {duration: .5, drawSVG: "0%"}, "cross")
            .from("#crossTop", {duration: .5, drawSVG: "0%"}, "cross")

            // Dots, Lines, Arrows
            .from("#clock-dots", {duration: .5, scale: 0, transformOrigin: "bottom"}, "dotline")
            .from("#dots", {duration: .5, scale: 0, transformOrigin: "bottom"}, "dotline")
            .from("#lines", {duration: .5, scale: 0, transformOrigin: "bottom"}, "dotline")
            .from("#clock-center", {duration: .5, scale: 0, transformOrigin: "bottom"}, "dotline")
            .from("#sped-arrow", {duration: .5, scale: 0, transformOrigin: "center"}, "arrows")
            .from("#minute", {duration: .5, scale: 0, transformOrigin: "center"}, "arrows")
            .from("#hour", {duration: .5, scale: 0, transformOrigin: "center"}, "arrows")
            
            // Numbers
            .from("#clock-numbers", {duration: .05, alpha: 0}, "glitch-on")
            .to("#clock-numbers", {duration: .05, alpha: 0}, "glitch-off")
            .to("#clock-numbers", {duration: .1, alpha: 1}, "glitch-on2")
            .to("#clock-numbers", {duration: .1, alpha: 0}, "glitch-off2")
            .to("#clock-numbers", {duration: .5, alpha: 1},"glitch-back")
            .from("#sped-numbers", {duration: .05, alpha: 0}, "glitch-on")
            .to("#sped-numbers", {duration: .05, alpha: 0}, "glitch-off")
            .to("#sped-numbers", {duration: .1, alpha: 1}, "glitch-on2")
            .to("#sped-numbers", {duration: .1, alpha: 0}, "glitch-off2")
            .to("#sped-numbers", {duration: .5, alpha: 1},"glitch-back")

            // Icons
            .from("#phone", {duration: 1, drawSVG: "0%", ease: "none"}, "icon")
            .from("#music", {duration: 1, drawSVG: "0%", ease: "none"}, "icon")
            .from("#cloud", {duration: 1, drawSVG: "0%", ease: "none"}, "icon")

            // Map
            .from("#road", {duration: 1.5, drawSVG: "0%", ease: "none"})
            .from("#arrow", {duration: .5, scale: 0, transformOrigin: "center"})
            .from("#route", {duration: 1, drawSVG: "0%", ease: "none"})

            







export function revealAnimation(){
    return revealTL
}