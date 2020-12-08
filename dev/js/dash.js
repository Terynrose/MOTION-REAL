import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

// const driveTL = gsap.timeline();

// export function driveAnimation() {
//     driveTL.to("#arrow", {duration: 10, motionPath: {path: "#route", align: "#route"}}, "dotline");

//     return driveTL;
// }


gsap.set("#arrow", {transformOrigin: "50% 50%"});

const revealTL = gsap.timeline();

        // Map
revealTL.from("#road", {duration: 1.5, drawSVG: "0%", ease: "none"})

        // Nav Text
        .from("#dash", {duration:.5, alpha: 0})
        .from("#letter-box", {duration: .25, scale: 0, transformOrigin: "left"}, "nav")
        .from("#nav", {duration: .5, alpha: 0}, "nav")
        .from("#b-bs", {duration: .1, alpha: 0})
        .from("#u-bs", {duration: .1, alpha: 0})
        .from("#r-bs", {duration: .1, alpha: 0})
        .from("#g-bs", {duration: .1, alpha: 0}, "arrow")
        .from("#e-bs", {duration: .1, alpha: 0})
        .from("#r2-bs", {duration: .1, alpha: 0})
        .from("#s-bs", {duration: .1, alpha: 0})
        .from("#t-bs", {duration: .1, alpha: 0})
        .from("#a-bs", {duration: .1, alpha: 0})
        .from("#n-bs", {duration: .1, alpha: 0})
        .from("#d-bs", {duration: .1, alpha: 0})
        .from("#arrow", {duration: .5, scale: 0, transformOrigin: "center"}, "arrow")
        .from("#route", {duration: 1, drawSVG: "0%", ease: "none"}, "route")
        .from("#direction", {delay: .2, duration: .75, alpha: 0}, "route")


        // Dash & Spedometer Circle
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

        .to("#sped-arrow", {duration: 1, rotation: -10, transformOrigin: "30 47"}, "icon")


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
        .from("#cloud2", {duration: .75, drawSVG: "0%", ease: "none"}, "cloud2")


        // Music
        .to("#music", {delay: .5, duration: .25, alpha: .25}, "idk")
        .to("#cloud", {duration: .25, alpha: 0, x: -150, y: 0}, "idk")
        .to("#music", {duration: .25, alpha: 1})
        .to("#music", {delay: .25, duration: .25, y: -50}, "music")
        .from("#stereo", {duration: 1, y: -200}, "music")
        .to("#cloud", {delay: .25, duration: 1, alpha: 1, x: 0, y: 0}, "music")
        .to("#weather-container", {delay: .25, duration: 1, y: -200}, "music")
        .to("#cloud-weather", {delay: .25, duration: 1, y: -50}, "music")
        .from("#song", {duration: .5, x:55, scaleX: .5, transformOrigin: "left"})

        // Radio Blasting
        .from("#l1", {duration: .15, alpha: 0}, "volume")
        .from("#l2", {duration: .15, alpha: 0})
        .from("#l3", {duration: .15, alpha: 0})
        .from("#l4", {duration: .15, alpha: 0})
        .from("#l5", {duration: .15, alpha: 0})
        .from("#l6", {duration: .15, alpha: 0})
        .from("#l7", {duration: .15, alpha: 0})
        .to("#volume-ticks", {duration: 2, rotation: 360, transformOrigin: "center"}, "volume")

        // Cruising Fast
        .to("#sped-arrow", {duration: 1, rotation: 120, transformOrigin: "30 47", ease: "none"}, "volume")
        .to("#sped-arrow", {delay: 1, duration: .35, rotation: 100, transformOrigin: "30 47"}, "volume")
        .to("#sped-arrow", {delay: 1.35, duration: .35, rotation: 110, transformOrigin: "30 47"}, "volume")
        .to("#sped-arrow", {delay: 1.7, duration: 1, rotation: -52, transformOrigin: "30 47"}, "volume")



       


        // SHUT DOWN

        // Glitch Numbers Off
        .to("#clock-numbers", {duration: .05, alpha: 0}, "g1")
        .to("#clock-numbers", {duration: .1, alpha: 1}, "g2")
        .to("#clock-numbers", {duration: .1, alpha: 0}, "g3")
        .to("#clock-numbers", {duration: .2, alpha: 1},"g4")
        .to("#clock-numbers", {duration: .05, alpha: 0}, "g5")
        .to("#sped-numbers", {duration: .05, alpha: 0}, "g1")
        .to("#sped-numbers", {duration: .1, alpha: 1}, "g2")
        .to("#sped-numbers", {duration: .1, alpha: 0}, "g3")
        .to("#sped-numbers", {duration: .2, alpha: 1},"g4")
        .to("#sped-numbers", {duration: .05, alpha: 0}, "g5")
        .to("#e-fuel", {duration: .05, alpha: 0}, "g1")
        .to("#e-fuel", {duration: .1, alpha: 1}, "g2")
        .to("#e-fuel", {duration: .1, alpha: 0}, "g3")
        .to("#e-fuel", {duration: .2, alpha: 1},"g4")
        .to("#e-fuel", {duration: .05, alpha: 0}, "g5")
        .to("#f-fuel", {duration: .05, alpha: 0}, "g1")
        .to("#f-fuel", {duration: .1, alpha: 1}, "g2")
        .to("#f-fuel", {duration: .1, alpha: 0}, "g3")
        .to("#f-fuel", {duration: .2, alpha: 1},"g4")
        .to("#f-fuel", {duration: .05, alpha: 0}, "g5")

        // Dots & Lines
        .to("#clock-dots", {duration: .5, scale: 0, transformOrigin: "bottom"}, "dotline2")
        .to("#dots", {duration: .5, scale: 0, transformOrigin: "bottom"}, "dotline2")
        .to("#lines", {duration: .5, scale: 0, transformOrigin: "bottom"}, "dotline2")
        .to("#sped-arrow", {duration: .5, scale: 0, transformOrigin: "center"}, "arrows2")
        .to("#minute", {duration: .5, scale: 0, transformOrigin: "center"}, "arrows2")
        .to("#hour", {duration: .5, scale: 0, transformOrigin: "center"}, "arrows2")
        .to("#fuel-level", {duration: .5, scale: 0, transformOrigin: "top"}, "arrows2")

        // Icons & Stereo
        .to("#stereo", {duration: 1, y: -70}, "dotline2")
        .to("#phone", {duration: 1, drawSVG: "0%", ease: "none"}, "dotline2")
        .to("#music", {duration: 1, drawSVG: "0%", ease: "none"}, "dotline2")
        .to("#cloud", {duration: 1, drawSVG: "0%", ease: "none"}, "dotline2")

        // Circles
        .to("#circle", {duration: .5, drawSVG: "0%"},"cross2")
        .to("#crossR", {duration: .5, drawSVG: "0%"}, "cross2")
        .to("#crossL", {duration: .5, drawSVG: "0%"}, "cross2")
        .to("#crossTop", {duration: .5, drawSVG: "0%"}, "cross2")
        .to("#clock-center", {duration: .5, scale: 0, transformOrigin: "bottom"}, "cross2")

        // Nav
        .to("#text", {duration: 1, x: -100}, "dotline2")
        .to("#arrow", {duration: .5, scale: 0, transformOrigin: "center"})
        .to("#route", {duration: .5, drawSVG: "0%", ease: "none"}, "route2")
        .to("#road", {duration: 1.5, drawSVG: "0%", ease: "none"}, "route2")

        // Dash Color
        .to("#dash", {duration:.5, alpha: 0})

        // Logo Reverse
        .to("#logo1", {duration: 1, y: 110}, "features")
        .to("#LW", {duration: 1, alpha: 1}, "features")
        .to("#RW", {duration: 1, alpha: 1}, "features")
        .to("#Beak", {duration: 1, alpha: 1}, "features")
        .to("#Shadows", {duration: 1, alpha: 1}, "features")
        .to("#Feathers", {duration: 1, alpha: 1}, "features")
        .to("#Wings", {duration: 1, alpha: 0}, "features")
        .to("#RW", {delay: .1, duration: 1, alpha: 0, rotation: -83, transformOrigin: "left"}, "features-out")
        .to("#LW", {delay: .1, duration: 1, alpha: 0, rotation: 83, transformOrigin: "right"}, "features-out")
        .to("#Beak", {duration: 1, alpha: 0}, "features-out")
        .to("#Shadows", {duration: 1, alpha: 0}, "features-out")
        .to("#Feathers", {duration: 1, alpha: 0}, "features-out")
        .to("#Body", {duration: 1, alpha: 0})



        // Drive Animation
        .to("#arrow", {duration: 18, motionPath: {path: "#route", align: "#route", alignOrigin: [0.5, 0.5], autoRotate: 115}, ease: CustomEase.create("custom", "M0,0 C0.128,0.194 0.172,0.212 0.366,0.492 0.42,0.57 0.429,1.057 0.584,1.058 0.624,1.058 0.73,1 0.836,1 0.966,1 0.932,1 1,1 ")}, "icon")
        .to("#map-all", {duration: 14, y: -100, x: 50, transformOrigin: "center"}, "icon")

export function revealAnimation(){
    return revealTL
}

// 