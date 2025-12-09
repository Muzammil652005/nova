import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);
  }
  nuxtApp.provide("gsap", gsap);
  nuxtApp.provide("ScrollSmoother", ScrollSmoother);
});
