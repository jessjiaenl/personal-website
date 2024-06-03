import { useEffect } from 'react';

import Me from '../objects/Me';
import Floor from '../objects/Floor';
import Hello from '../objects/Hello';
import Fence from '../objects/Fence';
import AboutMe from '../objects/AboutMe';
import Bench from '../objects/Bench';
import Pillar from '../objects/Pillar';
import Reel from '../objects/Reel';
import DrawingBoard from '../objects/DrawingBoard';


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
      <Floor/>
      <Me/>
      <Hello/>
      <Fence left={1100}/>
      <AboutMe/>
      <Bench/>
      <Pillar left={4000}/>
      <Pillar left={4400}/>
      <DrawingBoard/>
      <Pillar left={4800}/>
      <Reel/>
      <Fence left={5500}/>
    </>
  );
}

export default Home;