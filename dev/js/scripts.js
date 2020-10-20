import {gsap} from "gsap";
import {lampAnimation} from "./demo.js"

const mainTL = gsap.timeline();
mainTL.add(lampAnimation());