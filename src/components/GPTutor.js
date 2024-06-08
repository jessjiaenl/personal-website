import { motion } from "framer-motion";

function GPTutor(props) {
  return (
    <a href="https://gptutor.academy/" target="_blank">
      <motion.img src={process.env.PUBLIC_URL + "/assets/GPTutor.svg"}
                  style={{height:"20vh", position:"absolute", top:"20vh", left:props.left}}
                  whileHover={{scale:1.1}}
                  whileTap={{scale:1}}/>
    </a>
  );
}

export default GPTutor;