import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
// Note: ScrollSmoother requires GSAP premium license, disabled for production build
export let smoother: any = null;

const Navbar = () => {
  useEffect(() => {
    // ScrollSmoother disabled for production build (requires GSAP premium license)
    /*
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);
    */

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          // smoother.scrollTo(section, true, "top top"); // Disabled for production
          if (section) {
            document.querySelector(section)?.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
    window.addEventListener("resize", () => {
      // ScrollSmoother.refresh(true); // Disabled for production
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          <img src="/images/logo.svg" alt="Anany Mishra" className="navbar-logo" />
        </a>
        <a
          href="mailto:masteranany29@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          masteranany29@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
