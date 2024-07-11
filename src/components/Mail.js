import { motion } from "framer-motion";

function Mail() {
  return (
    <a href="mailto: jessicajiaenlee@gmail.com" target="_blank">
      <img src={process.env.PUBLIC_URL + "/assets/rack.svg"} // 4808
        style={{height:"15vh", position:"absolute", top:"21.5vh", left:"1vh"}}/> 
      <motion.img src={process.env.PUBLIC_URL + "/assets/envelope.svg"}
        style={{height:"8vh", position:"absolute", top:"24vh", left:"2vh"}} // 4817
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}/>
    </a>
  );
}

export default Mail;