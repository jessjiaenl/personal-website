import { motion } from "framer-motion";
import Floor from '../components/Floor';

function Games() {
  const handleBackClick = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <>
      <Floor/>
      <a href="/" onClick={handleBackClick}>
        <img src={process.env.PUBLIC_URL + "/assets/exit.svg"}
          style={{height:"10vh", position:"absolute", top: "0vh", left:"10vh"}}/>
      </a>

      <a href="https://github.com/jessjiaenl/snowboarding" target="_blank">
        <motion.img src={process.env.PUBLIC_URL + "/assets/frames/snowboarding.svg"}
                    style={{height:"20vh", position:"absolute", top:"20vh", left:"27vh"}}
                    // whileHover={{scale:1.1}}
                    // whileTap={{scale:1}}
                    />
        <motion.img src={process.env.PUBLIC_URL + "/assets/projectCards/snowCard.svg"}
          style={{height:"10vh", position:"absolute", top:"25vh", left:"65vh"}}
          whileHover={{scale:1.1}}
          whileTap={{scale:1}}
          />
      </a>

      <a href="https://www.youtube.com/watch?v=o_sosPxMxOk" target="_blank">
        <motion.img src={process.env.PUBLIC_URL + "/assets/frames/WBH.svg"}
                    style={{height:"20vh", position:"absolute", top:"20vh", left:"97vh"}}
                    // whileHover={{scale:1.1}}
                    // whileTap={{scale:1}}
                    />
        <motion.img src={process.env.PUBLIC_URL + "/assets/projectCards/WBHCard.svg"}
          style={{height:"10vh", position:"absolute", top:"25vh", left:"135vh"}}
          whileHover={{scale:1.1}}
          whileTap={{scale:1}}
          />
      </a>

      <a href="https://www.youtube.com/watch?v=gQKX-AO6mgU" target="_blank">
        <motion.img src={process.env.PUBLIC_URL + "/assets/frames/haunted.svg"}
                    style={{height:"20vh", position:"absolute", top:"45vh", left:"27vh"}}
                    // whileHover={{scale:1.1}}
                    // whileTap={{scale:1}}
                    />
        <motion.img src={process.env.PUBLIC_URL + "/assets/projectCards/hauntedCard.svg"}
          style={{height:"10vh", position:"absolute", top:"50vh", left:"65vh"}}
          whileHover={{scale:1.1}}
          whileTap={{scale:1}}
          />
      </a>

      <a href="https://www.youtube.com/watch?v=kGvr8PjbJAI" target="_blank">
        <motion.img src={process.env.PUBLIC_URL + "/assets/frames/LBL.svg"}
                    style={{height:"20vh", position:"absolute", top:"45vh", left:"97vh"}}
                    // whileHover={{scale:1.1}}
                    // whileTap={{scale:1}}
                    />
        <motion.img src={process.env.PUBLIC_URL + "/assets/projectCards/LBLCard.svg"}
          style={{height:"10vh", position:"absolute", top:"50vh", left:"135vh"}}
          whileHover={{scale:1.1}}
          whileTap={{scale:1}}
          />
      </a>
      
    </>
  );
}

export default Games;