import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import {logoAnimation} from "./logo.js"
// import {driveAnimation} from "./dash.js"
import {revealAnimation} from "./dash.js"


const mainTL = gsap.timeline();
mainTL.add(logoAnimation()); 
// mainTL.add(driveAnimation()); 
mainTL.add(revealAnimation()); 


GSDevTools.create();