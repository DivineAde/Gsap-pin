import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import './App.css'
import HeroHeader from './components/HeroHeader'

gsap.registerPlugin(ScrollTrigger);

function App() {
  let sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((sectionRef) => {
      if (sectionRef) {
        gsap.to(sectionRef, {
          scrollTrigger: {
            trigger: sectionRef,
            start: "top top",
            end: "+=100%",
            pin: true,
            pinSpacing: false,
          },
          opacity: 1,
          duration: 1,
          y: -100,
          ease: 'power1.out',
        });
      }
    });
  }, [sectionRefs]);

  return (
    <div className='scroll-animation'>
      <div className="container">
        <div ref={(el) => (sectionRefs.current[0] = el)} className="section one">
          <h1>Airpod</h1>
        </div>
        <div ref={(el) => (sectionRefs.current[1] = el)} className="section two">
          <h1>Homepod</h1>
        </div>
        <div ref={(el) => (sectionRefs.current[2] = el)} className="section three">
          <h1>Dual<br />Stock</h1>
        </div>
        <div ref={(el) => (sectionRefs.current[3] = el)} className="section four">
          <h1>DJIE</h1>
        </div>
      </div>
    </div>
  )
}

export default App;
