import { useEffect } from 'react';

import Me from '../components/Me';
import Floor from '../components/Floor';
import Hello from '../components/Hello';
import Fence from '../components/Fence';
import AboutMe from '../components/AboutMe';
import Bench from '../components/Bench';
import MagicCircle from '../components/MagicCircle';
import Pillar from '../components/Pillar';
import HeroBackdrop from '../components/HeroBackdrop';
import FallDet from '../components/fallDet';
import GPTutor from '../components/GPTutor';
import Diploma from '../components/Diploma';

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
      <Me left={230}/>
      <Fence left={440}/>
      <Hello left={690}/>
      <AboutMe left={1500}/>
      <Diploma left={2350}/>
      <Bench left={2300}/>
      <FallDet left={3000}/>
      <GPTutor left={3000}/>
      <Pillar left={3550} objAbove="Reel"/>
      <Pillar left={3900} objAbove="Mail"/>
      <MagicCircle left={4300}/>
      <Fence left={4500}/>
    </>
  );
}

export default Home;