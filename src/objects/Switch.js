import { motion } from "framer-motion";

function Switch() {
  return (
    <a href="/games">
      <motion.img src={process.env.PUBLIC_URL + "/assets/switch.svg"}
        style={{height:"9vh", position:"absolute", top:"68vh", left:"8vh"}}
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}/>
    </a>
  );
}

export default Switch;