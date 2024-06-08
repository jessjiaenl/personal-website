import { motion } from "framer-motion";

function MagicCircle(props) {
  return (
    <a href="https://www.linkedin.com/in/jia-en-jessica-lee/" target="_blank">
      <motion.img src={process.env.PUBLIC_URL + "/assets/magicCircle.svg"} 
        style={{height:"45vh", position:"absolute", top:"25vh", left:props.left}}/>
    </a>
  );
}

export default MagicCircle;