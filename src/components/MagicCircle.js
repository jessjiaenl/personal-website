import { useState } from 'react';
import { motion } from "framer-motion";

function MagicCircle(props) {
  const [isHovered, setIsHovered] = useState(false);

  const hover = () => {
    setIsHovered(true);
    console.log("hovered");
  }
  const unHover = () => {
    setIsHovered(false);
    console.log("unhovered");
  }

  const rotatingAnimation = (rotate, repeatType, duration, delay, ease) => {
    return {
      rotate: rotate,
      transition:{
        repeat: Infinity,
        repeatType: repeatType,
        duration: duration,
        delay: delay,
        ease: ease}
    };
  }

  return (
    <a href="https://www.linkedin.com/in/jia-en-jessica-lee/" target="_blank"
      style={{position:"absolute", top:"50vh", left:props.left}}>
      <div style={{position:"absolute",
                    top:"50%",
                    left:"50%",
                    zIndex:10,
                    transform: "translate(-25vh, -25vh)"}}
            onMouseEnter={(() => hover())}
            onMouseLeave={(() => unHover())}
                    >
        <motion.img src={process.env.PUBLIC_URL + "/assets/magicCircleAssets/circleOut.svg"} 
          style={{height:"50vh"}}
          animate={isHovered? rotatingAnimation(360, "mirror", 5, 0, "linear") : {}}/>
      </div>
      <div style={{position:"absolute",
                top:"50%",
                left:"50%",
                transform: "translate(-20vh, -20vh)"}}>
        <motion.img src={process.env.PUBLIC_URL + "/assets/magicCircleAssets/circleMid.svg"} 
          style={{height:"40vh"}}
          animate={isHovered? rotatingAnimation(-360, "mirror", 3, 0.5, "backInOut") : {}}/>
      </div>
      <div style={{position:"absolute",
                top:"50%",
                left:"50%",
                transform: "translate(-18vh, -18vh)"}}>
        <motion.img src={process.env.PUBLIC_URL + "/assets/magicCircleAssets/circleIn.svg"} 
          style={{height:"36vh"}}
          animate={isHovered? rotatingAnimation(360, "loop", 4, 0.25, "linear") : {}}/>
      </div>
      
      <img src={process.env.PUBLIC_URL + "/assets/magicCircleAssets/LinkedInIcon.svg"} 
        style={{height:"18vh", 
                position:"absolute",
                top:"50%",
                left:"50%",
                transform: "translate(-9vh, -9vh)"}}/>
    </a>
  );
}

export default MagicCircle;