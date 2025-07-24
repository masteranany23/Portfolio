import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  
  // SplitText functionality disabled for production build
  // This feature requires GSAP premium license
  console.log("SplitText animations disabled - requires GSAP premium license");
  
  // Basic fade-in animation as fallback
  const paras = document.querySelectorAll(".para");
  const titles = document.querySelectorAll(".title");
  
  paras.forEach((para) => {
    gsap.fromTo(para, 
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: para,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
  
  titles.forEach((title) => {
    gsap.fromTo(title,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
}
