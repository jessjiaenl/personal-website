import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

// const dropIn = {
//   hidden: {
//     y: "-100vh",
//     opacity: 0,
//   },
//   visible: {
//     y: "0",
//     opacity: 1,
//     trasition: {
//       duratio: 0.1,
//       type: "spring",
//       damping: 25,
//       stiffness: 500,
//     }
//   },
//   exit: {
//     y: "100vh",
//     opacity: 0,
//   },
// };

const Modal = ({ handleClose, text }) => {
  return (
    // <Backdrop onClick={handleClose}>
    //   <motion.div
    //     onClick={(e) => e.stopPropagation()}
    //     className="modal"
    //     variants={dropIn}
    //     initial="hidden"
    //     animate="visible"
    //     exit="exit">
      
    //   <p>{text}</p>
    //   <button onClick={handleClose}>Close</button>
    //   </motion.div>
    // </Backdrop>
    <div id="myModal" class="modal">

      <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    
    </div>
  );
};

export default Modal;