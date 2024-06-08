import { useEffect } from 'react';

import Me from '../components/Me';
import Floor from '../components/Floor';
import Hello from '../components/Hello';
import Fence from '../components/Fence';
import AboutMe from '../components/AboutMe';
import Bench from '../components/Bench';
import Pillar from '../components/Pillar';
import HeroBackdrop from '../components/HeroBackdrop';

function Home() {
  var dir = 0;
  var intID;

  useEffect(() => {
    const doScroll = (dir) => {
      window.scrollBy(dir*3,0);
    }

    const scroll = (e) => {
      if (e.clientX <= 0.1*window.innerWidth && dir != -1) {
          dir = -1;      
          intID = setInterval(doScroll, 10, dir)


      } else if (e.clientX >= 0.9*window.innerWidth && dir != 1) {
          dir = 1;      
          intID = setInterval(doScroll, 10, dir)
    
      } else if (0.1*window.innerWidth < e.clientX && e.clientX < 0.9*window.innerWidth) {
        dir = 0;
        // window.scrollTo(?,0); // recenter y coord
        clearInterval(intID);
      }
    }

    // run when mounted Home
    window.addEventListener("mousemove", scroll);

    // run when unmount Home, clear event listener
    return () => { window.removeEventListener("mousemove", scroll); };
  }, [])

  return (
    <>
      {/* <HeroBackdrop/> */}
      <Floor/>
      <Me/>
      <Hello/>
      <Fence left={1100}/>
      <AboutMe/>
      <Bench/>
      <Pillar left={4000} objAbove="DrawingBoard"/>
      <Pillar left={4400} objAbove="Reel"/>
      <Pillar left={4800} objAbove="Mail"/>
      <Fence left={5500}/>
    </>
  );
}

export default Home;