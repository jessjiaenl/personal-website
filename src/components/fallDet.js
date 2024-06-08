import { motion } from "framer-motion";

function FallDet(props) {
  return (
    <a href="https://github.com/jessjiaenl/VIA-Fall-Detection" target="_blank">
      <motion.img src={process.env.PUBLIC_URL + "/assets/fallDet.svg"}
                  style={{height:"20vh", position:"absolute", top:"20vh", left:props.left}}
                  whileHover={{scale:1.1}}
                  whileTap={{scale:1}}/>
    </a>
  );
}

export default FallDet;