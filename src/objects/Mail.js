import { motion } from "framer-motion";

function Mail() {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/assets/rack.svg"}
        style={{height:"15vh", position:"absolute", top:"42vh", left:4808}}/>
      <motion.img src={process.env.PUBLIC_URL + "/assets/envelope.svg"}
        style={{height:"8vh", position:"absolute", top:"44.5vh", left:4817}}
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}/>
    </div>
  );
}

export default Mail;