import { motion } from "framer-motion";

function FallDet(props) {
  return (
    <a href="https://github.com/jessjiaenl/VIA-Fall-Detection" target="_blank">
      <motion.img src={process.env.PUBLIC_URL + "/assets/frames/fallDet.svg"}
                  style={{height:"20vh", position:"absolute", top:"50vh", left:props.left}}
                  // whileHover={{scale:1.1}}
                  // whileTap={{scale:1}}
                  />
      <motion.img src={process.env.PUBLIC_URL + "/assets/projectCards/fallDetCard.svg"}
          style={{height:"10vh", position:"absolute", top:"55vh", left:`calc(${props.left}px + 35vh)`}}
          whileHover={{scale:1.1}}
          whileTap={{scale:1}}
          />
    </a>
  );
}

export default FallDet;