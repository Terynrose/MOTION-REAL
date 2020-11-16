import {gsap} from "gsap";
import {logoAnimation} from "./demo.js"

const mainTL = gsap.timeline();
mainTL.add(logoAnimation());