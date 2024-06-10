import { motion } from "framer-motion";

function GPTutor(props) {
  return (
    <a href="https://gptutor.academy/" target="_blank">
      <motion.img src={process.env.PUBLIC_URL + "/assets/frames/GPTutor.svg"}
                  style={{height:"20vh", position:"absolute", top:"20vh", left:props.left}}
                  // whileHover={{scale:1.1}}
                  // whileTap={{scale:1}}
                  />
      <motion.img src={process.env.PUBLIC_URL + "/assets/projectCards/GPTutorCard.svg"}
          style={{height:"10vh", position:"absolute", top:"25vh", left:`calc(${props.left}px + 35vh)`}}
          whileHover={{scale:1.1}}
          whileTap={{scale:1}}
          />
    </a>
  );
}

export default GPTutor;