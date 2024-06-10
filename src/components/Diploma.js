import { motion } from "framer-motion";

function Diploma(props) {
  return (
    <a> {/* href="/School" */}
      <motion.img src={process.env.PUBLIC_URL + "/assets/diploma.svg"}
                  style={{height:"30vh", position:"absolute", top:"15vh", left:props.left}}
                  whileHover={{scale:1.1}}
                  whileTap={{scale:1}}/>
    </a>
  );
}

export default Diploma;