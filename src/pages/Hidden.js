import { useEffect } from 'react';

import HorrorMe from '../components/HorrorMe';
import Floor from '../components/Floor';
import Hello from '../components/Hello';
import Fence from '../components/Fence';
import AboutMe from '../components/AboutMe';
import Bench from '../components/Bench';
import MagicCircle from '../components/MagicCircle';
import Pillar from '../components/Pillar';
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
      var x = e.clientX, y = e.clientY;
      if (x <= 0.1*window.innerWidth && 
          y >= 0.1*window.innerHeight && y <= 0.9*window.innerHeight &&
          dir != -1) {
          dir = -1;      
          intID = setInterval(doScroll, 10, dir)


      } else if (x >= 0.9*window.innerWidth && 
          y >= 0.1*window.innerHeight && y <= 0.9*window.innerHeight &&
          dir != 1) {
          dir = 1;      
          intID = setInterval(doScroll, 10, dir)
    
      } else if ((0.1*window.innerWidth < x && x < 0.9*window.innerWidth) ||
                  (y < 0.1*window.innerHeight || y > 0.9*window.innerHeight)) {
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
      <a href="/">
        <img src={process.env.PUBLIC_URL + "/assets/door.svg"}
             style={{height:"75vh", position:"absolute", top: "20vh", left:"-5vh"}}/>
      </a>
      <img src={process.env.PUBLIC_URL + "/assets/rightArrow.svg"}
           style={{height:"10vh", position:"absolute", top: "0vh", left:"5vh", transform:"scaleX(-1)"}}/>
      <HorrorMe left="25vh"/>
      <Fence left="48vh"/>
      <img src={process.env.PUBLIC_URL + "/assets/bloodyText.svg"}
           style={{height:"25vh", position:"absolute", top: "30vh", left:"80vh"}}/>
      {/* <Hello left="82vh"/>
      <AboutMe left="195vh"/>
      <Diploma left="300vh"/>
      <Bench left="295vh"/>
      <FallDet left="380vh"/>
      <GPTutor left="380vh"/>
      <Pillar left="460vh" objAbove="Reel"/>
      <Pillar left="500vh" objAbove="Mail"/>
      <MagicCircle left="560vh"/>
      <Fence left="560vh"/> */}
    </>
  );
}

export default Home;