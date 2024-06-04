import { motion } from "framer-motion";

function Reel() {
  const floatingAnimation = {
    y: [0, -40, 0],  // Y-axis movement
    transition:{
      repeat: Infinity,
      repeatType: "mirror",
      duration: 3,
      ease: "easeInOut"}
  };

  return (
    <a href="/resume">
      <motion.img src={process.env.PUBLIC_URL + "/assets/reel.svg"}
        style={{height:"15vh", position:"absolute", top:"15vh", left:"4vh"}} // 4425
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        animate={floatingAnimation}
      />
    </a>
  );
}

export default Reel;