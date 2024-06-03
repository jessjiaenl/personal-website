import { motion } from "framer-motion";

function HeroBackdrop() {
  return (
    <motion.div
      class="backdrop"
      // initial={{opacity:1}}
      animation={{opacity:0}}
      exit={{opacity:0}}
      transition={{duration:1}}/>
  );
}

export default HeroBackdrop;