import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Simple animations without SplitText - fallback for production
  const landingElements = [
    ".landing-info h3", 
    ".landing-intro h2", 
    ".landing-intro h1",
    ".landing-h2-info",
    ".landing-h2-info-1",
    ".landing-h2-1",
    ".landing-h2-2"
  ];
  
  landingElements.forEach((selector, index) => {
    const elements = document.querySelectorAll(selector);
    gsap.fromTo(
      elements,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        delay: 0.3 + (index * 0.1),
      }
    );
  });

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
}
