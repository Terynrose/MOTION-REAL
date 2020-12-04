import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const revealTL = gsap.timeline();

        // Map
revealTL.from("#road", {duration: 1.5, drawSVG: "0%", ease: "none"})

        // Nav Text
        .from("#letter-box", {duration: .25, scale: 0, transformOrigin: "left"}, "nav")
        .from("#nav", {duration: .5, alpha: 0}, "nav")
        .from("#m-mcd", {duration: .1, alpha: 0})
        .from("#c-mcd", {duration: .1, alpha: 0})
        .from("#d-mcd", {duration: .1, alpha: 0})
        .from("#o-mcd", {duration: .1, alpha: 0}, "arrow")
        .from("#n-mcd", {duration: .1, alpha: 0})
        .from("#a-mcd", {duration: .1, alpha: 0})
        .from("#l-mcd", {duration: .1, alpha: 0})
        .from("#d2-mcd", {duration: .1, alpha: 0})
        .from("#s-mcd", {duration: .1, alpha: 0})
        .from("#arrow", {duration: .5, scale: 0, transformOrigin: "center"}, "arrow")
        .from("#route", {duration: 1, drawSVG: "0%", ease: "none"}, "route")
        .from("#direction", {delay: .2, duration: .75, alpha: 0}, "route")



        // Dash & Spedometer Circle
        .from("#dash", {duration:.5, alpha: 0})
        .from("#circle", {duration: .05, alpha: 0})
        .fromTo("#circle", {duration: .5, drawSVG: "0% 10%"},{duration: .5, drawSVG: "90% 100%"})
            .to("#circle", {duration: .5, drawSVG: "100%"})
        .from("#crossR", {duration: .5, drawSVG: "0%"}, "cross")
        .from("#crossL", {duration: .5, drawSVG: "0%"}, "cross")
        .from("#crossTop", {duration: .5, drawSVG: "0%"}, "cross")
        .from("#clock-center", {duration: .5, scale: 0, transformOrigin: "bottom"}, "cross")

        // Dots, Lines, Arrows
        .from("#clock-dots", {duration: .5, scale: 0, transformOrigin: "bottom"}, "dotline")
        .from("#dots", {duration: .5, scale: 0, transformOrigin: "bottom"}, "dotline")
        .from("#lines", {duration: .5, scale: 0, transformOrigin: "bottom"}, "dotline")
        .from("#sped-arrow", {duration: .5, scale: 0, transformOrigin: "center"}, "arrows")
        .from("#minute", {duration: .5, scale: 0, transformOrigin: "center"}, "arrows")
        .from("#hour", {duration: .5, scale: 0, transformOrigin: "center"}, "arrows")
        .from("#fuel-level", {duration: .5, scale: 0, transformOrigin: "top"}, "arrows")
        
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
        .from("#e-fuel", {duration: .05, alpha: 0}, "glitch-on")
        .to("#e-fuel", {duration: .05, alpha: 0}, "glitch-off")
        .to("#e-fuel", {duration: .1, alpha: 1}, "glitch-on2")
        .to("#e-fuel", {duration: .1, alpha: 0}, "glitch-off2")
        .to("#e-fuel", {duration: .5, alpha: 1},"glitch-back")
        .from("#f-fuel", {duration: .05, alpha: 0}, "glitch-on")
        .to("#f-fuel", {duration: .05, alpha: 0}, "glitch-off")
        .to("#f-fuel", {duration: .1, alpha: 1}, "glitch-on2")
        .to("#f-fuel", {duration: .1, alpha: 0}, "glitch-off2")
        .to("#f-fuel", {duration: .5, alpha: 1},"glitch-back")

        // Icons
        .from("#phone", {duration: 1, drawSVG: "0%", ease: "none"}, "icon")
        .from("#music", {duration: 1, drawSVG: "0%", ease: "none"}, "icon")
        .from("#cloud", {duration: 1, drawSVG: "0%", ease: "none"}, "icon")

        // Weather
        .to("#cloud", {delay: .5, duration: .25, alpha: .25})
        .to("#cloud", {duration: .25, alpha: 1})
        .to("#cloud", {delay: .25, duration: .25, y: -50}, "weather")
        .to("#music", {delay: .25, duration: .25, x: 140}, "weather")
        .from("#weather-container", {duration: 1, y: -200}, "weather")

        .from("#temp", {duration: .5, alpha: 0})
        .from("#p-partly", {duration: .08, alpha: 0}, "cloud2")
        .from("#a-partly", {duration: .08, alpha: 0})
        .from("#r-partly", {duration: .08, alpha: 0})
        .from("#t-partly", {duration: .08, alpha: 0})
        .from("#l-partly", {duration: .08, alpha: 0})
        .from("#y-partly", {duration: .08, alpha: 0})
        .from("#s-sunny", {duration: .08, alpha: 0})
        .from("#u-sunny", {duration: .08, alpha: 0})
        .from("#n-sunny", {duration: .08, alpha: 0})
        .from("#n2-sunny", {duration: .08, alpha: 0})
        .from("#y-sunny", {duration: .08, alpha: 0})
        .from("#cloud-weather", {duration: .75, drawSVG: "0%", ease: "none"}, "cloud2")


        // Music
        .to("#music", {delay: .5, duration: .25, alpha: .25}, "idk")
        .to("#cloud", {duration: .25, alpha: 0, x: -150, y: 0}, "idk")
        .to("#music", {duration: .25, alpha: 1})
        .to("#music", {delay: .25, duration: .25, y: -50}, "music")
        .from("#stereo-container", {duration: 1, y: -200}, "music")
        .to("#cloud", {delay: .25, duration: 1, alpha: 1, x: 0, y: 0}, "music")
        .to("#weather-container", {delay: .25, duration: 1, y: -200}, "music")
        .to("#cloud-weather", {delay: .25, duration: 1, y: -50}, "music")
        .from("#song", {duration: .5, x:55, scaleX: .5, transformOrigin: "left"})

        // Radio Blasting
        .from("#l9", {duration: .1, alpha: 0}, "volume")
        .from("#l8", {duration: .1, alpha: 0})
        .from("#l7", {duration: .1, alpha: 0})
        .from("#l6", {duration: .1, alpha: 0})
        .from("#l5", {duration: .1, alpha: 0})
        .from("#l4", {duration: .1, alpha: 0})
        .from("#l3", {duration: .1, alpha: 0})
        .from("#l2", {duration: .1, alpha: 0})
        .from("#l1", {duration: .1, alpha: 0})
        .to("#volume-ticks", {duration: 2, rotation: 360, transformOrigin: "center"}, "volume")

        // Cruising Fast
        .to("#sped-arrow", {delay: .25, duration: 1.75, rotation: 120, transformOrigin: "30 47"}, "volume")
        .to("#sped-arrow", {duration: .75, rotation: 100, transformOrigin: "30 47"})
        .to("#sped-arrow", {duration: .75, rotation: 110, transformOrigin: "30 47"})








export function revealAnimation(){
    return revealTL
}